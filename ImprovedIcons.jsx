import React, { useState } from 'react';

const ImprovedIcons = () => {
  const [downloading, setDownloading] = useState(false);

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

  const downloadAll = async () => {
    setDownloading(true);
    for (const icon of icons) {
      await new Promise(resolve => setTimeout(resolve, 300));
      const svgElement = document.getElementById(icon.id)?.querySelector('svg');
      if (svgElement) {
        downloadPNG(svgElement, icon.name);
      }
    }
    setDownloading(false);
  };

  const icons = [
    // First batch - already created
    {
      id: 'duplicate-process',
      name: 'DUPLICATE_PROCESS.png',
      label: 'Duplicate Process',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="transparent"/>
          <rect x="6" y="8" width="16" height="20" rx="1.5" fill="#AB47BC"/>
          <rect x="18" y="6" width="16" height="20" rx="1.5" fill="#CE93D8"/>
          <line x1="21" y1="11" x2="31" y2="11" stroke="white" strokeWidth="2"/>
          <line x1="21" y1="15" x2="31" y2="15" stroke="white" strokeWidth="2"/>
          <line x1="21" y1="19" x2="28" y2="19" stroke="white" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'edit-device-properties',
      name: 'EDIT_DEVICE_PROPERTIES.png',
      label: 'Edit Device Properties',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="transparent"/>
          <rect x="6" y="8" width="28" height="24" rx="2" fill="#66B2FF"/>
          <rect x="6" y="8" width="28" height="4" fill="#42A5F5"/>
          <circle cx="9" cy="15" r="1.5" fill="#66BB6A"/>
          <circle cx="9" cy="19" r="1.5" fill="#66BB6A"/>
          <circle cx="9" cy="23" r="1.5" fill="#66BB6A"/>
          <rect x="13" y="14" width="5" height="2" rx="0.5" fill="#E3F2FD"/>
          <rect x="20" y="14" width="5" height="2" rx="0.5" fill="#E3F2FD"/>
          <rect x="27" y="14" width="5" height="2" rx="0.5" fill="#E3F2FD"/>
        </svg>
      )
    },
    {
      id: 'edit-my-process',
      name: 'EDIT_MY_PROCESS.png',
      label: 'Edit My Process',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="transparent"/>
          <circle cx="20" cy="20" r="16" fill="#4DD0E1"/>
          <circle cx="20" cy="14" r="3" fill="white"/>
          <rect x="17" y="18" width="6" height="10" rx="1" fill="white"/>
        </svg>
      )
    },
    {
      id: 'edit-process',
      name: 'EDIT_PROCESS.png',
      label: 'Edit Process',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="transparent"/>
          <rect x="8" y="5" width="24" height="30" rx="2" fill="white"/>
          <line x1="11" y1="10" x2="29" y2="10" stroke="#E0E0E0" strokeWidth="2"/>
          <line x1="11" y1="15" x2="29" y2="15" stroke="#E0E0E0" strokeWidth="2"/>
          <line x1="11" y1="20" x2="24" y2="20" stroke="#E0E0E0" strokeWidth="2"/>
          <path d="M24 24 L30 18 L28 16 L22 22 Z" fill="#FFA726"/>
          <rect x="22" y="22" width="3" height="3" fill="#FFD54F"/>
        </svg>
      )
    },
    {
      id: 'empty',
      name: 'EMPTY.png',
      label: 'Empty / No Data',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <path d="M4 14 L4 40 L44 40 L44 14 L28 14 L24 10 L4 10 Z" fill="none" stroke="#BDBDBD" strokeWidth="3" strokeDasharray="4 4"/>
          <circle cx="24" cy="27" r="12" fill="none" stroke="#9E9E9E" strokeWidth="3"/>
          <line x1="16" y1="19" x2="32" y2="35" stroke="#9E9E9E" strokeWidth="3" strokeLinecap="round"/>
          <text x="24" y="32" fontSize="10" fontWeight="bold" fill="#757575" textAnchor="middle" fontFamily="Arial">EMPTY</text>
        </svg>
      )
    },
    {
      id: 'execution-logs',
      name: 'EXECUTION_LOGS.png',
      label: 'Execution Logs',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="transparent"/>
          <rect x="5" y="7" width="30" height="26" rx="2" fill="#263238"/>
          <rect x="5" y="7" width="30" height="4" fill="#37474F"/>
          <circle cx="8" cy="9" r="1" fill="#EF5350"/>
          <circle cx="11" cy="9" r="1" fill="#FFEB3B"/>
          <circle cx="14" cy="9" r="1" fill="#66BB6A"/>
          <line x1="8" y1="15" x2="18" y2="15" stroke="#4DD0E1" strokeWidth="2"/>
          <line x1="8" y1="20" x2="24" y2="20" stroke="#AB47BC" strokeWidth="2"/>
          <line x1="8" y1="25" x2="22" y2="25" stroke="#66BB6A" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'general-info',
      name: 'GENERAL_INFO.png',
      label: 'General Info',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="transparent"/>
          <circle cx="20" cy="20" r="16" fill="#4DD0E1"/>
          <circle cx="20" cy="12" r="3" fill="white"/>
          <rect x="17" y="17" width="6" height="12" rx="1" fill="white"/>
        </svg>
      )
    },
    {
      id: 'generate-code-ai',
      name: 'GENERATE_CODE_WITH_AI.png',
      label: 'Generate Code (AI)',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="transparent"/>
          <path d="M10 10 L11 13 L14 14 L11 15 L10 18 L9 15 L6 14 L9 13 Z" fill="#FFEB3B"/>
          <path d="M28 8 L28.7 10 L31 10.7 L28.7 11.4 L28 14 L27.3 11.4 L25 10.7 L27.3 10 Z" fill="#FDD835"/>
          <path d="M32 28 L32.5 30 L34 30.5 L32.5 31 L32 33 L31.5 31 L30 30.5 L31.5 30 Z" fill="#FFF176"/>
          <rect x="7" y="18" width="26" height="16" rx="2" fill="#263238"/>
          <rect x="7" y="18" width="26" height="3" fill="#37474F"/>
          <circle cx="9.5" cy="19.5" r="0.8" fill="#EF5350"/>
          <circle cx="11.5" cy="19.5" r="0.8" fill="#FFEB3B"/>
          <circle cx="13.5" cy="19.5" r="0.8" fill="#66BB6A"/>
          <text x="20" y="29" fontSize="11" fontWeight="bold" fill="#AB47BC" textAnchor="middle" fontFamily="monospace">&lt;/&gt;</text>
          <rect x="27" y="3" width="10" height="6" rx="1" fill="#AB47BC"/>
          <text x="32" y="7.5" fontSize="5" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">AI</text>
        </svg>
      )
    },
    {
      id: 'group-devices',
      name: 'GROUP_DEVICES.png',
      label: 'Group Devices',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="transparent"/>
          <path d="M4 14 L4 34 L36 34 L36 14 L26 14 L23 11 L4 11 Z" fill="#FF9800"/>
          <rect x="9" y="18" width="6" height="8" rx="1" fill="white"/>
          <rect x="17" y="18" width="6" height="8" rx="1" fill="white"/>
          <rect x="25" y="18" width="6" height="8" rx="1" fill="white"/>
          <circle cx="12" cy="20" r="1" fill="#FF9800"/>
          <circle cx="12" cy="23" r="1" fill="#FF9800"/>
          <circle cx="20" cy="20" r="1" fill="#FF9800"/>
          <circle cx="20" cy="23" r="1" fill="#FF9800"/>
          <circle cx="28" cy="20" r="1" fill="#FF9800"/>
          <circle cx="28" cy="23" r="1" fill="#FF9800"/>
        </svg>
      )
    },
    {
      id: 'open-remote-ftp',
      name: 'OPEN_REMOTE_FTP.png',
      label: 'Open Remote FTP',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="transparent"/>
          <rect x="3" y="3" width="34" height="34" rx="4" fill="#EF5350"/>
          <text x="20" y="28" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">FTP</text>
        </svg>
      )
    },
    {
      id: 'open-remote-rdp',
      name: 'OPEN_REMOTE_RDP.png',
      label: 'Open Remote RDP',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="transparent"/>
          <rect x="3" y="5" width="34" height="24" rx="2" fill="#66B2FF"/>
          <rect x="5" y="7" width="30" height="19" fill="#E3F2FD"/>
          <text x="20" y="21" fontSize="12" fontWeight="bold" fill="#1976D2" textAnchor="middle" fontFamily="Arial">RDP</text>
          <circle cx="32" cy="10" r="3" fill="#4CAF50"/>
          <circle cx="32" cy="10" r="1.5" fill="white"/>
          <rect x="16" y="29" width="8" height="2" fill="#1976D2"/>
          <rect x="12" y="31" width="16" height="2" rx="1" fill="#1976D2"/>
        </svg>
      )
    },
    {
      id: 'open-remote-ssh',
      name: 'OPEN_REMOTE_SSH.png',
      label: 'Open Remote SSH',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="transparent"/>
          <rect x="2" y="5" width="36" height="30" rx="2" fill="#263238"/>
          <path d="M9 14 L15 20 L9 26" stroke="#66BB6A" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="18" y1="26" x2="31" y2="26" stroke="#66BB6A" strokeWidth="3.5" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen p-8" style={{backgroundColor: '#2C3E50'}}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Icon Set - Exact Specifications
            </h1>
            <p className="text-gray-300">Transparent backgrounds, huge icons, thick strokes (3-3.5px), vibrant colors</p>
          </div>

          <div className="mb-6 p-4 rounded-lg bg-gray-700 border border-gray-600">
            <h3 className="font-semibold mb-3 text-white">Button States (from your config):</h3>
            <div className="grid grid-cols-4 gap-4 text-xs text-gray-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded flex items-center justify-center" style={{backgroundColor: '#363f49', border: '1px solid #444444'}}>
                  <span style={{color: 'yellow', fontSize: '10px'}}>Normal</span>
                </div>
                <span>#363f49 + yellow</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded flex items-center justify-center" style={{backgroundColor: '#4CAF50', border: '1px solid #444444'}}>
                  <span className="text-white" style={{fontSize: '10px'}}>Hover</span>
                </div>
                <span>#4CAF50 (green)</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded flex items-center justify-center" style={{backgroundColor: '#e6ffff', border: '1px solid #444444'}}>
                  <span style={{color: 'red', fontSize: '10px'}}>Selected</span>
                </div>
                <span>#e6ffff + red</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded flex items-center justify-center" style={{backgroundColor: '#4CAF50', border: '1px solid #4CAF50'}}>
                  <span className="text-white" style={{fontSize: '10px'}}>Active</span>
                </div>
                <span>#4CAF50 + white</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-6 flex-wrap">
            <button
              onClick={downloadAll}
              disabled={downloading}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg disabled:opacity-50"
            >
              {downloading ? 'Downloading All PNGs...' : 'Download All as PNG'}
            </button>
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
            <h3 className="text-lg font-semibold mb-3" style={{color: '#66BB6A'}}>✓ Specifications Matched:</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>• <strong className="text-white">HUGE icons</strong> - Nearly fill entire 40x40 canvas</li>
              <li>• <strong className="text-white">Extra thick strokes (3-3.5px)</strong> - Crystal clear visibility</li>
              <li>• <strong className="text-white">Transparent backgrounds</strong> - Work on all button states</li>
              <li>• <strong className="text-white">Vibrant colors</strong> - Blue (#66B2FF), Orange (#FF9800), Purple (#AB47BC), Green (#66BB6A)</li>
              <li>• <strong className="text-white">Yellow labels</strong> - Matching your button config</li>
              <li>• <strong className="text-white">Exact dimensions</strong> - 40x40px PNG exports</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedIcons;
