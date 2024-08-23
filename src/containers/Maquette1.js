import React from 'react';

export default function Maquette1() {
  return (
    <div className="min-h-screen bg-neutral-silver flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-6 text-primary">Welcome to My React App</h1>
        
        <p className="text-neutral-grey mb-4">
          This is an example page using custom colors defined in Tailwind CSS. The colors are organized into categories like neutral, primary, secondary, and actions.
        </p>
        
        <div className="mb-4">
          <h2 className="text-secondary text-xl font-semibold mb-2">Color Shades</h2>
          <div className="flex space-x-2">
            <div className="bg-colorShade-shade1 h-10 w-10"></div>
            <div className="bg-colorShade-shade2 h-10 w-10"></div>
            <div className="bg-colorShade-shade3 h-10 w-10"></div>
            <div className="bg-colorShade-shade4 h-10 w-10"></div>
            <div className="bg-colorShade-shade5 h-10 w-10"></div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-secondary text-xl font-semibold mb-2">Color Tints</h2>
          <div className="flex space-x-2">
            <div className="bg-colorTint-tint1 h-10 w-10"></div>
            <div className="bg-colorTint-tint2 h-10 w-10"></div>
            <div className="bg-colorTint-tint3 h-10 w-10"></div>
            <div className="bg-colorTint-tint4 h-10 w-10"></div>
            <div className="bg-colorTint-tint5 h-10 w-10"></div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-secondary text-xl font-semibold mb-2">Actions</h2>
          <div className="flex space-x-2">
            <button className="bg-action-warning text-white px-4 py-2 rounded">Warning</button>
            <button className="bg-action-error text-white px-4 py-2 rounded">Error</button>
            <button className="bg-action-success text-white px-4 py-2 rounded">Success</button>
          </div>
        </div>
        
        <div>
          <h2 className="text-secondary text-xl font-semibold mb-2">Neutral Colors</h2>
          <div className="flex space-x-2">
            <div className="bg-neutral-black h-10 w-10"></div>
            <div className="bg-neutral-d_grey h-10 w-10"></div>
            <div className="bg-neutral-grey h-10 w-10"></div>
            <div className="bg-neutral-l_grey h-10 w-10"></div>
            <div className="bg-neutral-grey_blue h-10 w-10"></div>
            <div className="bg-neutral-silver h-10 w-10"></div>
            <div className="bg-neutral-white h-10 w-10 border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

