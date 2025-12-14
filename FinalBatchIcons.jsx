import React from 'react';

const FinalBatchIcons = () => {
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

  const icons = [
    {
      id: 'multi-deployment',
      name: 'MULTI_DEPLOYMENT.png',
      label: 'Multi Deploy [Ctrl+m]',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <rect x="14" y="2" width="20" height="12" rx="1.5" fill="#66B2FF"/>
          <line x1="24" y1="14" x2="24" y2="21" stroke="#4DD0E1" strokeWidth="3.5"/>
          <line x1="4" y1="24" x2="44" y2="24" stroke="#4DD0E1" strokeWidth="3.5"/>
          <line x1="4" y1="24" x2="4" y2="32" stroke="#4DD0E1" strokeWidth="3.5"/>
          <line x1="24" y1="24" x2="24" y2="32" stroke="#4DD0E1" strokeWidth="3.5"/>
          <line x1="44" y1="24" x2="44" y2="32" stroke="#4DD0E1" strokeWidth="3.5"/>
          <rect x="0" y="32" width="8" height="12" rx="1.5" fill="#66BB6A"/>
          <rect x="20" y="32" width="8" height="12" rx="1.5" fill="#66BB6A"/>
          <rect x="40" y="32" width="8" height="12" rx="1.5" fill="#66BB6A"/>
        </svg>
      )
    },
    {
      id: 'my-companies',
      name: 'MY_COMPANIES.png',
      label: 'Companies [Ctrl+u]',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <rect x="2" y="10" width="18" height="34" fill="#AB47BC"/>
          <rect x="4" y="14" width="3" height="4" fill="white"/>
          <rect x="8" y="14" width="3" height="4" fill="white"/>
          <rect x="12" y="14" width="3" height="4" fill="white"/>
          <rect x="16" y="14" width="3" height="4" fill="white"/>
          <rect x="4" y="20" width="3" height="4" fill="white"/>
          <rect x="8" y="20" width="3" height="4" fill="white"/>
          <rect x="12" y="20" width="3" height="4" fill="white"/>
          <rect x="16" y="20" width="3" height="4" fill="white"/>
          <rect x="4" y="26" width="3" height="4" fill="white"/>
          <rect x="8" y="26" width="3" height="4" fill="white"/>
          <rect x="12" y="26" width="3" height="4" fill="white"/>
          <rect x="16" y="26" width="3" height="4" fill="white"/>
          <rect x="4" y="32" width="3" height="4" fill="white"/>
          <rect x="8" y="32" width="3" height="4" fill="white"/>
          <rect x="12" y="32" width="3" height="4" fill="white"/>
          <rect x="16" y="32" width="3" height="4" fill="white"/>
          <rect x="24" y="4" width="22" height="40" fill="#CE93D8"/>
          <rect x="27" y="8" width="4" height="5" fill="white"/>
          <rect x="33" y="8" width="4" height="5" fill="white"/>
          <rect x="39" y="8" width="4" height="5" fill="white"/>
          <rect x="27" y="15" width="4" height="5" fill="white"/>
          <rect x="33" y="15" width="4" height="5" fill="white"/>
          <rect x="39" y="15" width="4" height="5" fill="white"/>
          <rect x="27" y="22" width="4" height="5" fill="white"/>
          <rect x="33" y="22" width="4" height="5" fill="white"/>
          <rect x="39" y="22" width="4" height="5" fill="white"/>
          <rect x="27" y="29" width="4" height="5" fill="white"/>
          <rect x="33" y="29" width="4" height="5" fill="white"/>
          <rect x="39" y="29" width="4" height="5" fill="white"/>
          <rect x="27" y="36" width="4" height="5" fill="white"/>
          <rect x="33" y="36" width="4" height="5" fill="white"/>
          <rect x="39" y="36" width="4" height="5" fill="white"/>
        </svg>
      )
    },
    {
      id: 'my-deployment-group-rel-devices',
      name: 'MY_DEPLOYMENT_GROUP_REL_DEVICES.png',
      label: 'Group Devices',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <rect x="6" y="4" width="36" height="40" rx="2" fill="none" stroke="#66B2FF" strokeWidth="3.5"/>
          <rect x="10" y="10" width="28" height="6" fill="#66B2FF"/>
          <line x1="12" y1="24" x2="36" y2="24" stroke="#4DD0E1" strokeWidth="2.5"/>
          <line x1="12" y1="30" x2="32" y2="30" stroke="#4DD0E1" strokeWidth="2.5"/>
          <line x1="12" y1="35" x2="34" y2="35" stroke="#4DD0E1" strokeWidth="2.5"/>
          <circle cx="9" cy="24" r="2.5" fill="#66BB6A"/>
          <circle cx="9" cy="30" r="2.5" fill="#66BB6A"/>
          <circle cx="9" cy="35" r="2.5" fill="#66BB6A"/>
        </svg>
      )
    },
    {
      id: 'my-deployment-groups',
      name: 'MY_DEPLOYMENT_GROUPS.png',
      label: 'Deploy Groups [Ctrl+g]',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <path d="M24 4 L2 18 L8 18 L8 44 L18 44 L18 32 L30 32 L30 44 L40 44 L40 18 L46 18 Z" fill="#FF9800"/>
          <rect x="12" y="22" width="6" height="8" fill="#F57C00"/>
          <rect x="21" y="12" width="6" height="8" fill="#F57C00"/>
          <rect x="30" y="22" width="6" height="8" fill="#F57C00"/>
        </svg>
      )
    },
    {
      id: 'my-devices',
      name: 'MY_DEVICES.png',
      label: 'My Devices [Ctrl+d]',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <rect x="4" y="6" width="20" height="16" rx="1.5" fill="#66B2FF"/>
          <rect x="6" y="8" width="16" height="11" fill="#42A5F5"/>
          <rect x="10" y="22" width="8" height="1.5" fill="#1976D2"/>
          <rect x="12" y="23.5" width="4" height="2" rx="1" fill="#1976D2"/>
          <rect x="28" y="8" width="16" height="28" rx="2.5" fill="#AB47BC"/>
          <rect x="30" y="11" width="12" height="20" fill="#CE93D8"/>
          <circle cx="36" cy="34" r="2" fill="white"/>
          <rect x="10" y="32" width="8" height="6" rx="1" fill="#66BB6A"/>
          <rect x="11" y="33" width="6" height="4" fill="#81C784"/>
          <line x1="22" y1="32" x2="22" y2="38" stroke="#4DD0E1" strokeWidth="2"/>
          <line x1="19" y1="35" x2="25" y2="35" stroke="#4DD0E1" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'my-master-nodes',
      name: 'MY_MASTER_NODES.png',
      label: 'Master Nodes [F2]',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
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
      id: 'my-master-node-shared-folders',
      name: 'MY_MASTER_NODE_SHARED_FOLDERS.png',
      label: 'Shared Folders',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <path d="M2 14 L2 42 L46 42 L46 14 L30 14 L26 10 L2 10 Z" fill="#FF9800"/>
          <circle cx="18" cy="28" r="5" fill="white"/>
          <circle cx="30" cy="28" r="5" fill="white"/>
          <line x1="23" y1="28" x2="25" y2="28" stroke="white" strokeWidth="3.5"/>
        </svg>
      )
    },
    {
      id: 'my-omen-unity-device-rel-ips',
      name: 'MY_OMEN_UNITY_DEVICE_REL_IPS.png',
      label: 'Device IPs',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <circle cx="24" cy="24" r="22" fill="#66BB6A"/>
          <circle cx="24" cy="24" r="16" fill="none" stroke="white" strokeWidth="3.5"/>
          <circle cx="24" cy="24" r="10" fill="none" stroke="white" strokeWidth="3.5"/>
          <line x1="24" y1="2" x2="24" y2="46" stroke="white" strokeWidth="3.5"/>
          <line x1="2" y1="24" x2="46" y2="24" stroke="white" strokeWidth="3.5"/>
        </svg>
      )
    },
    {
      id: 'my-process-packages-predefined',
      name: 'MY_PROCESS_PACKAGES_PREDEFINED.png',
      label: 'Process Packages [Ctrl+p]',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <rect x="4" y="6" width="40" height="36" rx="2" fill="#66BB6A" stroke="#43A047" strokeWidth="2"/>
          <path d="M24 6 L24 42" stroke="#43A047" strokeWidth="3.5"/>
          <path d="M4 24 L44 24" stroke="#43A047" strokeWidth="3.5"/>
          <path d="M4 15 L44 15" stroke="#43A047" strokeWidth="2.5"/>
          <path d="M4 33 L44 33" stroke="#43A047" strokeWidth="2.5"/>
          <circle cx="14" cy="10.5" r="2.5" fill="white"/>
          <circle cx="34" cy="10.5" r="2.5" fill="white"/>
          <circle cx="14" cy="19.5" r="2.5" fill="white"/>
          <circle cx="34" cy="19.5" r="2.5" fill="white"/>
          <circle cx="14" cy="28.5" r="2.5" fill="white"/>
          <circle cx="34" cy="28.5" r="2.5" fill="white"/>
          <circle cx="14" cy="37.5" r="2.5" fill="white"/>
          <circle cx="34" cy="37.5" r="2.5" fill="white"/>
        </svg>
      )
    },
    {
      id: 'my-profile',
      name: 'MY_PROFILE.png',
      label: 'My Profile [F4]',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <circle cx="24" cy="24" r="22" fill="#66B2FF"/>
          <circle cx="24" cy="17" r="8" fill="white"/>
          <path d="M8 42 C8 33 15 28 24 28 C33 28 40 33 40 42" fill="white"/>
        </svg>
      )
    },
    {
      id: 'node-shared-folders',
      name: 'NODE_SHARED_FOLDERS.png',
      label: 'Shared Folders',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <path d="M2 14 L2 42 L46 42 L46 14 L30 14 L26 10 L2 10 Z" fill="#FF9800"/>
          <rect x="12" y="20" width="3" height="14" fill="#F57C00"/>
          <rect x="19" y="20" width="3" height="14" fill="#F57C00"/>
          <rect x="26" y="20" width="3" height="14" fill="#F57C00"/>
          <rect x="33" y="20" width="3" height="14" fill="#F57C00"/>
        </svg>
      )
    },
    {
      id: 'omen',
      name: 'omen.png',
      label: 'Omen',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <circle cx="24" cy="24" r="22" fill="#AB47BC"/>
          <text x="24" y="34" fontSize="30" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">Ω</text>
        </svg>
      )
    },
    {
      id: 'open-deploying-pc',
      name: 'open_deploying_pc.png',
      label: 'Upload / Deploy',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <path d="M12 28 C8 28 6 25 6 22 C6 19 8 16 12 16 C12 11 16 8 20 8 C24 8 28 11 28 16 C32 16 34 19 34 22 C34 25 32 28 28 28" fill="#66B2FF" stroke="#1976D2" strokeWidth="2"/>
          <rect x="19" y="24" width="10" height="20" rx="1" fill="#1976D2"/>
          <path d="M14 28 L24 18 L34 28" fill="#66BB6A" stroke="#43A047" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="24" cy="18" r="3" fill="#66BB6A"/>
          <rect x="8" y="40" width="32" height="4" rx="2" fill="#1976D2"/>
        </svg>
      )
    },
    {
      id: 'open-deploying-pc-search',
      name: 'open_deploying_pc_with_search_process.png',
      label: 'Deploy Search',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <rect x="2" y="6" width="32" height="24" rx="2" fill="#66B2FF"/>
          <rect x="8" y="30" width="20" height="2.5" fill="#42A5F5"/>
          <circle cx="38" cy="36" r="9" fill="none" stroke="#66BB6A" strokeWidth="4"/>
          <line x1="44" y1="42" x2="47" y2="45" stroke="#66BB6A" strokeWidth="4.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'open-mask-execution-logs',
      name: 'OPEN_MASK_EXECUTION_LOGS.png',
      label: 'Execution Logs [F6]',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <rect x="6" y="2" width="36" height="44" rx="2" fill="none" stroke="#66B2FF" strokeWidth="3.5"/>
          <rect x="10" y="8" width="28" height="6" fill="#66B2FF"/>
          <line x1="10" y1="20" x2="38" y2="20" stroke="#4DD0E1" strokeWidth="2.5"/>
          <line x1="10" y1="26" x2="34" y2="26" stroke="#4DD0E1" strokeWidth="2.5"/>
          <line x1="10" y1="31" x2="36" y2="31" stroke="#4DD0E1" strokeWidth="2.5"/>
          <line x1="10" y1="36" x2="32" y2="36" stroke="#4DD0E1" strokeWidth="2.5"/>
        </svg>
      )
    },
    {
      id: 'open-remote-ftp',
      name: 'OPEN_REMOTE_FTP.png',
      label: 'Remote FTP [F11]',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <rect x="4" y="4" width="40" height="40" rx="4" fill="#EF5350"/>
          <text x="24" y="33" fontSize="22" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">FTP</text>
        </svg>
      )
    },
    {
      id: 'open-remote-rdp',
      name: 'OPEN_REMOTE_RDP.png',
      label: 'Remote RDP [F12]',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <rect x="3" y="5" width="42" height="28" rx="2" fill="#66B2FF"/>
          <rect x="5" y="7" width="38" height="24" fill="#E3F2FD"/>
          <text x="24" y="24" fontSize="14" fontWeight="bold" fill="#1976D2" textAnchor="middle" fontFamily="Arial">RDP</text>
          <circle cx="40" cy="10" r="3.5" fill="#4CAF50"/>
          <circle cx="40" cy="10" r="1.8" fill="white"/>
          <rect x="18" y="35" width="12" height="2" fill="#1976D2"/>
          <rect x="14" y="37" width="20" height="2" rx="1" fill="#1976D2"/>
        </svg>
      )
    },
    {
      id: 'open-remote-ssh',
      name: 'OPEN_REMOTE_SSH.png',
      label: 'Remote SSH [F10]',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <rect x="2" y="6" width="44" height="36" rx="2" fill="#263238"/>
          <path d="M10 16 L18 24 L10 32" stroke="#66BB6A" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="22" y1="32" x2="38" y2="32" stroke="#66BB6A" strokeWidth="4.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'page-1',
      name: 'PAGE_1.png',
      label: 'Page 1',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <rect x="6" y="2" width="36" height="44" rx="2" fill="none" stroke="#66B2FF" strokeWidth="3.5"/>
          <path d="M30 2 L30 16 L42 16" fill="none" stroke="#66B2FF" strokeWidth="3.5" strokeLinejoin="round"/>
          <text x="24" y="34" fontSize="24" fontWeight="bold" fill="#66B2FF" textAnchor="middle" fontFamily="Arial">1</text>
        </svg>
      )
    },
    {
      id: 'page-back',
      name: 'PAGE_BACK.png',
      label: 'Page Back',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="transparent"/>
          <circle cx="24" cy="24" r="22" fill="#66B2FF"/>
          <path d="M30 12 L14 24 L30 36" stroke="white" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="p-8" style={{backgroundColor: '#2C3E50', minHeight: '100vh'}}>
      <h2 className="text-2xl font-bold mb-6 text-white">Final Icon Set - Exact App Specifications</h2>
      
      <div className="mb-6 p-4 rounded-lg" style={{backgroundColor: '#34495E', border: '1px solid #566573'}}>
        <h3 className="font-semibold mb-3" style={{color: '#FCF9F4'}}>Button States (from Python config):</h3>
        <div className="grid grid-cols-4 gap-4 text-xs" style={{color: '#BDC3C7'}}>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded" style={{backgroundColor: '#363f49', border: '1px solid #444444'}}>
              <div className="text-center pt-5" style={{color: 'yellow', fontSize: '10px'}}>Normal</div>
            </div>
            <span>#363f49 + yellow</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded" style={{backgroundColor: '#4CAF50', border: '1px solid #444444'}}>
              <div className="text-white text-center pt-5" style={{fontSize: '10px'}}>Hover</div>
            </div>
            <span>#4CAF50 (green)</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded" style={{backgroundColor: '#e6ffff', border: '1px solid #444444'}}>
              <div className="text-center pt-5" style={{color: 'red', fontSize: '10px'}}>Selected</div>
            </div>
            <span>#e6ffff + red</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded" style={{backgroundColor: '#4CAF50', border: '1px solid #4CAF50'}}>
              <div className="text-white text-center pt-5" style={{fontSize: '10px'}}>Active</div>
            </div>
            <span>#4CAF50 + white</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {icons.map((icon) => (
          <div key={icon.id} className="flex flex-col items-center gap-2 p-3 rounded shadow-lg" style={{backgroundColor: '#363f49', border: '1px solid #8A9CB2'}}>
            <div id={icon.id} className="rounded p-1">
              {icon.svg}
            </div>
            <span className="text-xs text-center leading-tight h-8" style={{color: 'yellow'}}>{icon.label}</span>
            <div className="flex gap-1">
              <button 
                onClick={(e) => {
                  const svg = e.target.parentElement.parentElement.querySelector('svg');
                  downloadPNG(svg, icon.name);
                }} 
                className="text-xs text-white px-2 py-1 rounded hover:opacity-80"
                style={{backgroundColor: '#66B2FF'}}
              >
                PNG
              </button>
              <button 
                onClick={(e) => {
                  const svg = e.target.parentElement.parentElement.querySelector('svg');
                  downloadSVG(svg, icon.name.replace('.png', '.svg'));
                }} 
                className="text-xs text-white px-2 py-1 rounded hover:opacity-80"
                style={{backgroundColor: '#8A9CB2'}}
              >
                SVG
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 rounded-lg shadow-lg" style={{backgroundColor: '#34495E', border: '1px solid #566573'}}>
        <h3 className="font-semibold mb-3 text-lg" style={{color: '#66BB6A'}}>✓ Perfect Match to Your SQL Configuration:</h3>
        <ul className="text-sm space-y-2" style={{color: '#ECF0F1'}}>
          <li>• <strong style={{color: 'white'}}>HUGE icons</strong> - Nearly fill entire 40x40 canvas for maximum comfort</li>
          <li>• <strong style={{color: 'white'}}>Extra thick strokes (3.5-4.5px)</strong> - Crystal clear visibility</li>
          <li>• <strong style={{color: 'white'}}>Button dimensions</strong> - 60x40px (main), 35x35px, 30x35px variants</li>
          <li>• <strong style={{color: 'white'}}>Exact colors from Python</strong> - Normal: #363f49+yellow, Hover: #4CAF50+white, Selected: #e6ffff+red</li>
          <li>• <strong style={{color: 'white'}}>Border</strong> - highlightbackground: #444444, highlightcolor: #4CAF50</li>
          <li>• <strong style={{color: 'white'}}>Yellow labels</strong> - Matching fg: yellow from button config</li>
          <li>• <strong style={{color: 'white'}}>Vibrant icon colors</strong> - Blue (#66B2FF), Orange (#FF9800), Purple (#AB47BC), Green (#66BB6A)</li>
          <li>• <strong style={{color: 'white'}}>Transparent backgrounds</strong> - Work perfectly on all button states</li>
          <li>• <strong style={{color: 'white'}}>Relief: ridge/flat</strong> - Designed for your button relief settings</li>
        </ul>
      </div>
    </div>
  );
};

export default FinalBatchIcons;
