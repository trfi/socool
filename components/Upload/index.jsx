import React, { useState } from 'react'
import { Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import strapi from "../../utils/strapi"
import Image from 'next/image'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error('Image must smaller than 5MB!');
  }
  return isJpgOrPng && isLt2M;
}

const UploadComponent = ({ user, className, width, cb }) => {
  const [{ imageUrl, loading, isUpload }, setState] = useState({ imageUrl: '', loading: false, isUpload: false });

  const handleChange = info => {
    console.debug(info);
    const formData = new FormData();

    if (info.file.status === 'uploading' && !isUpload) {
      setState({ loading: true, isUpload: true });
      formData.append('files', info.file.originFileObj);
      strapi(user)
        .post(`${apiUrl}/upload`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
          const imageUrl = apiUrl + res.data[0].url
          const imageId = res.data[0].id
          console.log('imageId', imageId);
          setState({
            imageUrl: imageUrl,
            loading: false,
          })
          cb(imageId)
        })
        .catch(err => {
          console.log(err);
        });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      console.debug('done');
    }
  }

  const handlePreview = () => {

  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className={className}
        showUploadList={false}
        onPreview={handlePreview}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <Image className="rounded-2xl" src={imageUrl} width={width} height={114} objectFit='cover' alt="avatar"/> : uploadButton}
      </Upload>
    </>
  )
}

export default UploadComponent