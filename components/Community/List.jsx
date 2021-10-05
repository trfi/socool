import React, { useState, useEffect } from "react"
import Link from 'next/link'


const MyCommunityComponent = ({ communities }) => {
  // ?created_by=${user.id}
  return (
    <>
      <div className="border-0 bg-white text-gray-dark space-y-8 rounded-3xl sm:p-12">
        <h1 className="text-3xl font-bold">My Community</h1>
        <div className="space-y-6">
          {communities.map((c) => (
            <div className="border-2 rounded-lg p-3 font-semibold text-lg" key={c.id}>
              <Link href={`/community/${c.id}`}>{c.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export default MyCommunityComponent
