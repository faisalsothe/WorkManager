'use client'
import React, { useEffect } from 'react';

const DynamicPage = ({title}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>

    </div>
  );
};

export default DynamicPage;
