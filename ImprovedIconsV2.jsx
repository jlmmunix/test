import React from 'react';

// Redesigned icons for better clarity and understanding
const ImprovedIconsV2 = () => {
  const icons = [
    {
      id: 'start-play',
      name: 'START_PLAY.png',
      label: 'Start / Play',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <circle cx="24" cy="24" r="22" fill="#66BB6A"/>
          <circle cx="24" cy="24" r="18" fill="#81C784"/>
          <path d="M18 12 L36 24 L18 36 Z" fill="white"/>
        </svg>
      )
    },
    {
      id: 'multiple-devices',
      name: 'MULTIPLE_DEVICES.png',
      label: 'Multiple Devices',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          {/* Monitor */}
          <rect x="4" y="8" width="18" height="14" rx="1.5" fill="#66B2FF" stroke="#1976D2" strokeWidth="2"/>
          <rect x="6" y="10" width="14" height="10" fill="#E3F2FD"/>
          <rect x="9" y="22" width="8" height="1" fill="#1976D2"/>
          <rect x="10" y="23" width="6" height="2" rx="0.5" fill="#1976D2"/>
          {/* Tablet */}
          <rect x="26" y="6" width="14" height="20" rx="2" fill="#AB47BC" stroke="#7B1FA2" strokeWidth="2"/>
          <rect x="28" y="9" width="10" height="14" fill="#E1BEE7"/>
          <circle cx="33" cy="24" r="1.5" fill="white"/>
          {/* Phone */}
          <rect x="18" y="28" width="10" height="16" rx="2" fill="#FF9800" stroke="#F57C00" strokeWidth="2"/>
          <rect x="20" y="31" width="6" height="10" fill="#FFE0B2"/>
          <circle cx="23" cy="42" r="1" fill="white"/>
        </svg>
      )
    },
    {
      id: 'refresh-reload-clear',
      name: 'REFRESH_RELOAD_CLEAR.png',
      label: 'Refresh / Reload',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <circle cx="24" cy="24" r="20" fill="none" stroke="#42A5F5" strokeWidth="4"/>
          {/* Top arrow */}
          <path d="M24 4 L24 10" stroke="#42A5F5" strokeWidth="4" strokeLinecap="round"/>
          <path d="M18 8 L24 4 L30 8" fill="#42A5F5"/>
          {/* Bottom arrow */}
          <path d="M24 38 L24 44" stroke="#42A5F5" strokeWidth="4" strokeLinecap="round"/>
          <path d="M18 40 L24 44 L30 40" fill="#42A5F5"/>
          {/* Circular arrows */}
          <path d="M38 16 C38 16 36 12 32 10" stroke="#1976D2" strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M10 32 C10 32 12 36 16 38" stroke="#1976D2" strokeWidth="3.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'sync-update-clear',
      name: 'SYNC_UPDATE_CLEAR.png',
      label: 'Sync / Update',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <circle cx="24" cy="24" r="20" fill="#66BB6A"/>
          <circle cx="24" cy="24" r="15" fill="#81C784"/>
          {/* Clockwise arrow */}
          <path d="M24 9 C30 9 35 12 38 17" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>
          <path d="M34 10 L38 17 L31 17 Z" fill="white"/>
          {/* Counter-clockwise arrow */}
          <path d="M24 39 C18 39 13 36 10 31" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>
          <path d="M14 38 L10 31 L17 31 Z" fill="white"/>
          {/* Check mark in center */}
          <path d="M19 24 L22 27 L29 20" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'server-network-clear',
      name: 'SERVER_NETWORK_CLEAR.png',
      label: 'Server / Network',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          {/* Server stack */}
          <rect x="6" y="4" width="36" height="12" rx="2" fill="#42A5F5" stroke="#1976D2" strokeWidth="2"/>
          <circle cx="11" cy="10" r="2" fill="#66BB6A"/>
          <circle cx="17" cy="10" r="2" fill="#66BB6A"/>
          <circle cx="23" cy="10" r="2" fill="#FFEB3B"/>
          <line x1="30" y1="8" x2="38" y2="8" stroke="white" strokeWidth="2"/>
          <line x1="30" y1="12" x2="38" y2="12" stroke="white" strokeWidth="2"/>
          
          <rect x="6" y="18" width="36" height="12" rx="2" fill="#42A5F5" stroke="#1976D2" strokeWidth="2"/>
          <circle cx="11" cy="24" r="2" fill="#66BB6A"/>
          <circle cx="17" cy="24" r="2" fill="#66BB6A"/>
          <circle cx="23" cy="24" r="2" fill="#66BB6A"/>
          <line x1="30" y1="22" x2="38" y2="22" stroke="white" strokeWidth="2"/>
          <line x1="30" y1="26" x2="38" y2="26" stroke="white" strokeWidth="2"/>
          
          <rect x="6" y="32" width="36" height="12" rx="2" fill="#42A5F5" stroke="#1976D2" strokeWidth="2"/>
          <circle cx="11" cy="38" r="2" fill="#66BB6A"/>
          <circle cx="17" cy="38" r="2" fill="#66BB6A"/>
          <circle cx="23" cy="38" r="2" fill="#66BB6A"/>
          <line x1="30" y1="36" x2="38" y2="36" stroke="white" strokeWidth="2"/>
          <line x1="30" y1="40" x2="38" y2="40" stroke="white" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'empty-blank-clear',
      name: 'EMPTY_BLANK_CLEAR.png',
      label: 'Empty / No Data',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          {/* Empty folder */}
          <path d="M4 14 L4 40 L44 40 L44 14 L28 14 L24 10 L4 10 Z" fill="none" stroke="#BDBDBD" strokeWidth="3" strokeDasharray="4 4"/>
          {/* Empty symbol */}
          <circle cx="24" cy="27" r="12" fill="none" stroke="#9E9E9E" strokeWidth="3"/>
          <line x1="16" y1="19" x2="32" y2="35" stroke="#9E9E9E" strokeWidth="3" strokeLinecap="round"/>
          <text x="24" y="32" fontSize="10" fill="#757575" textAnchor="middle" fontFamily="Arial" fontWeight="bold">EMPTY</text>
        </svg>
      )
    },
    {
      id: 'upload-deploy-clear',
      name: 'UPLOAD_DEPLOY_CLEAR.png',
      label: 'Upload / Deploy',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          {/* Cloud */}
          <path d="M12 28 C8 28 6 25 6 22 C6 19 8 16 12 16 C12 11 16 8 20 8 C24 8 28 11 28 16 C32 16 34 19 34 22 C34 25 32 28 28 28" fill="#66B2FF" stroke="#1976D2" strokeWidth="2"/>
          {/* Upload arrow */}
          <rect x="19" y="24" width="10" height="20" rx="1" fill="#1976D2"/>
          <path d="M14 28 L24 18 L34 28" fill="#66BB6A" stroke="#43A047" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="24" cy="18" r="3" fill="#66BB6A"/>
          {/* Base */}
          <rect x="8" y="40" width="32" height="4" rx="2" fill="#1976D2"/>
        </svg>
      )
    }
  ];

  const downloadPNG = (svgElement, filename) => {
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    canvas.width = 40;
    canvas.height = 40;
    
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 100);
      }, 'image/png');
    };
    
    const svgBase64 = btoa(unescape(encodeURIComponent(svgData)));
    img.src = 'data:image/svg+xml;base64,' + svgBase64;
  };

  const downloadSVG = (svgElement, filename) => {
    const svgData = svgElement.outerHTML;
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 100);
  };

  return (
    <div className="min-h-screen p-8" style={{backgroundColor: '#2C3E50'}}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Redesigned Icons - Clear & Intuitive
            </h1>
            <p className="text-gray-300">7 completely redesigned icons for better clarity and understanding</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {icons.map((icon) => (
              <div
                key={icon.id}
                className="p-4 rounded-xl shadow-lg transition-all"
                style={{backgroundColor: '#363f49', border: '1px solid #8A9CB2'}}
              >
                <div className="bg-gray-700 p-3 rounded-lg shadow-sm mb-3 flex items-center justify-center" id={icon.id}>
                  {icon.svg}
                </div>
                <p className="text-xs font-medium mb-2 text-center leading-tight h-8" style={{color: 'yellow'}}>
                  {icon.label}
                </p>
                <p className="text-xs mb-2 text-center font-mono break-all text-gray-400">
                  {icon.name}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      const svg = e.target.closest('[style*="363f49"]').querySelector('svg');
                      downloadPNG(svg, icon.name);
                    }}
                    className="flex-1 px-3 py-1.5 text-white text-xs font-medium rounded-lg transition-all"
                    style={{backgroundColor: '#66B2FF'}}
                  >
                    PNG
                  </button>
                  <button
                    onClick={(e) => {
                      const svg = e.target.closest('[style*="363f49"]').querySelector('svg');
                      downloadSVG(svg, icon.name.replace('.png', '.svg'));
                    }}
                    className="flex-1 px-3 py-1.5 text-white text-xs font-medium rounded-lg transition-all"
                    style={{backgroundColor: '#8A9CB2'}}
                  >
                    SVG
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl shadow-lg bg-gray-700 border border-gray-600">
            <h3 className="text-lg font-semibold mb-3" style={{color: '#66BB6A'}}>✓ Improvements Made:</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>• <strong className="text-white">Start/Play</strong> - Clear play triangle in green circle (action button)</li>
              <li>• <strong className="text-white">Multiple Devices</strong> - Shows monitor, tablet, phone clearly</li>
              <li>• <strong className="text-white">Refresh/Reload</strong> - Circular arrows with up/down indicators</li>
              <li>• <strong className="text-white">Sync/Update</strong> - Green circle with bidirectional arrows and checkmark</li>
              <li>• <strong className="text-white">Server/Network</strong> - Clear server stack with status lights</li>
              <li>• <strong className="text-white">Empty/No Data</strong> - Dashed folder with "EMPTY" text</li>
              <li>• <strong className="text-white">Upload/Deploy</strong> - Cloud with upload arrow to base</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedIconsV2;
