import React, { useState } from 'react';

const BatchImprovedIcons = () => {
  const [downloading, setDownloading] = useState(false);

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
    {
      id: 'close-window',
      name: 'CLOSE_WINDOW.png',
      label: 'Close Window',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="6" fill="#DC2626"/>
          <circle cx="24" cy="24" r="14" fill="#EF4444"/>
          <path d="M18 18 L30 30 M30 18 L18 30" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'company-devices',
      name: 'COMPANY_DEVICES.png',
      label: 'Company Devices',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="10" width="36" height="24" rx="2" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2"/>
          <rect x="8" y="12" width="32" height="18" fill="#60A5FA"/>
          <rect x="21" y="34" width="6" height="3" fill="#1E40AF"/>
          <rect x="16" y="37" width="16" height="2" rx="1" fill="#1E40AF"/>
          <circle cx="38" cy="38" r="7" fill="#10B981"/>
          <path d="M35 38 L37 40 L41 35" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'company-processes',
      name: 'COMPANY_PROCESSES.png',
      label: 'Company Processes',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" fill="none" stroke="#8B5CF6" strokeWidth="2.5"/>
          <circle cx="24" cy="8" r="5" fill="#8B5CF6"/>
          <circle cx="8" cy="32" r="5" fill="#8B5CF6"/>
          <circle cx="40" cy="32" r="5" fill="#8B5CF6"/>
          <circle cx="24" cy="38" r="5" fill="#A78BFA"/>
          <path d="M24 13 L24 18 M20 30 L12 32 M28 30 L36 32 M24 33 L24 38" stroke="#8B5CF6" strokeWidth="2.5"/>
          <circle cx="24" cy="24" r="6" fill="#C4B5FD"/>
        </svg>
      )
    },
    {
      id: 'copy-entry',
      name: 'COPY_ENTRY.png',
      label: 'Copy Entry',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="24" height="30" rx="2" fill="#10B981" stroke="#059669" strokeWidth="2"/>
          <rect x="16" y="16" width="24" height="30" rx="2" fill="#34D399" stroke="#10B981" strokeWidth="2"/>
          <line x1="20" y1="22" x2="34" y2="22" stroke="#047857" strokeWidth="2" strokeLinecap="round"/>
          <line x1="20" y1="27" x2="34" y2="27" stroke="#047857" strokeWidth="2" strokeLinecap="round"/>
          <line x1="20" y1="32" x2="30" y2="32" stroke="#047857" strokeWidth="2" strokeLinecap="round"/>
          <line x1="20" y1="37" x2="32" y2="37" stroke="#047857" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'copy-process',
      name: 'COPY_PROCESS.png',
      label: 'Copy Process',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="10" width="22" height="26" rx="2" fill="#10B981" stroke="#059669" strokeWidth="2"/>
          <rect x="20" y="16" width="22" height="26" rx="2" fill="#34D399" stroke="#10B981" strokeWidth="2"/>
          <circle cx="31" cy="29" r="8" fill="white" stroke="#059669" strokeWidth="2"/>
          <path d="M27 29 L30 32 L36 26" stroke="#059669" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'dashboard-home',
      name: 'DASHBOARD_HOME.png',
      label: 'Dashboard Home',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6 L6 20 L10 20 L10 40 L20 40 L20 28 L28 28 L28 40 L38 40 L38 20 L42 20 Z" fill="#F97316" stroke="#EA580C" strokeWidth="2" strokeLinejoin="round"/>
          <rect x="21" y="12" width="6" height="6" rx="1" fill="#FED7AA"/>
          <circle cx="14" cy="26" r="2" fill="#FED7AA"/>
          <circle cx="34" cy="26" r="2" fill="#FED7AA"/>
        </svg>
      )
    },
    {
      id: 'delete-entry',
      name: 'DELETE_ENTRY.png',
      label: 'Delete Entry',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect x="13" y="18" width="22" height="26" rx="2" fill="#EF4444" stroke="#DC2626" strokeWidth="2"/>
          <rect x="10" y="13" width="28" height="5" rx="1.5" fill="#DC2626"/>
          <path d="M18 13 L18 9 C18 7.9 18.9 7 20 7 L28 7 C29.1 7 30 7.9 30 9 L30 13" fill="#B91C1C"/>
          <line x1="19" y1="24" x2="19" y2="37" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="24" y1="24" x2="24" y2="37" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="29" y1="24" x2="29" y2="37" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'delete-process',
      name: 'DELETE_PROCESS.png',
      label: 'Delete Process',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect x="13" y="18" width="22" height="26" rx="2" fill="#EF4444" stroke="#DC2626" strokeWidth="2"/>
          <rect x="10" y="13" width="28" height="5" rx="1.5" fill="#DC2626"/>
          <path d="M18 13 L18 9 C18 7.9 18.9 7 20 7 L28 7 C29.1 7 30 7.9 30 9 L30 13" fill="#B91C1C"/>
          <circle cx="24" cy="31" r="8" fill="white"/>
          <circle cx="24" cy="28" r="1.5" fill="#DC2626"/>
          <path d="M24 30 L24 36" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'delete-user-cache',
      name: 'DELETE_USER_CACHE.png',
      label: 'Delete User Cache',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="12" fill="#60A5FA" stroke="#3B82F6" strokeWidth="2"/>
          <circle cx="18" cy="15" r="5" fill="#DBEAFE"/>
          <path d="M9 24 C9 24 12 28 18 28 C24 28 27 24 27 24" stroke="#DBEAFE" strokeWidth="2" fill="none"/>
          <rect x="26" y="26" width="18" height="16" rx="2" fill="#EF4444" stroke="#DC2626" strokeWidth="2"/>
          <rect x="28" y="22" width="14" height="4" rx="1" fill="#DC2626"/>
          <line x1="31" y1="31" x2="31" y2="37" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="35" y1="31" x2="35" y2="37" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="39" y1="31" x2="39" y2="37" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'deploy-all-devices',
      name: 'DEPLOY_ALL_ON_DEVICES.png',
      label: 'Deploy All Devices',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="16" width="18" height="12" rx="1.5" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2"/>
          <rect x="26" y="16" width="18" height="12" rx="1.5" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2"/>
          <rect x="15" y="32" width="18" height="12" rx="1.5" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2"/>
          <circle cx="24" cy="8" r="6" fill="#10B981"/>
          <path d="M24 4 L24 8 L24 12 M20 8 L24 8 L28 8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="13" y1="22" x2="15" y2="22" stroke="#60A5FA" strokeWidth="1.5"/>
          <line x1="35" y1="22" x2="37" y2="22" stroke="#60A5FA" strokeWidth="1.5"/>
          <line x1="24" y1="38" x2="26" y2="38" stroke="#60A5FA" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      id: 'deploy-my-processes',
      name: 'DEPLOY_MY_PROCESSES.png',
      label: 'Deploy My Processes',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="36" height="36" rx="3" fill="#1F2937"/>
          <rect x="8" y="8" width="32" height="32" rx="2" fill="#374151"/>
          <path d="M16 18 L24 24 L16 30" stroke="#10B981" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="26" y1="29" x2="34" y2="29" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="38" cy="10" r="8" fill="#10B981"/>
          <path d="M38 6 L38 10 L38 14 M34 10 L38 10 L42 10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'deploy-process',
      name: 'DEPLOY_PROCESS.png',
      label: 'Deploy Process',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="18" fill="#10B981"/>
          <circle cx="24" cy="24" r="14" fill="#34D399"/>
          <path d="M17 24 L22 29 L32 19" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="6" r="2" fill="#10B981"/>
          <circle cx="24" cy="42" r="2" fill="#10B981"/>
          <circle cx="6" cy="24" r="2" fill="#10B981"/>
          <circle cx="42" cy="24" r="2" fill="#10B981"/>
        </svg>
      )
    },
    {
      id: 'deploy-single-process',
      name: 'DEPLOY_SINGLE_PROCESS.png',
      label: 'Deploy Single',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="28" height="28" rx="3" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2"/>
          <rect x="14" y="14" width="20" height="20" rx="2" fill="#60A5FA"/>
          <circle cx="36" cy="36" r="11" fill="#10B981"/>
          <circle cx="36" cy="36" r="8" fill="#34D399"/>
          <path d="M31 36 L34 39 L41 32" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'deploy-single-process1',
      name: 'DEPLOY_SINGLE_PROCESS1.png',
      label: 'Deploy Single Alt',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="28" height="28" rx="3" fill="#10B981" stroke="#059669" strokeWidth="2"/>
          <rect x="14" y="14" width="20" height="20" rx="2" fill="#34D399"/>
          <path d="M18 24 L23 29 L34 18" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'device-execution-logs',
      name: 'DEVICE_EXECUTION_LOGS.png',
      label: 'Execution Logs',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="6" width="32" height="36" rx="2" fill="white" stroke="#3B82F6" strokeWidth="2"/>
          <rect x="10" y="8" width="28" height="6" fill="#3B82F6"/>
          <line x1="12" y1="18" x2="36" y2="18" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
          <line x1="12" y1="23" x2="32" y2="23" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
          <line x1="12" y1="28" x2="34" y2="28" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
          <line x1="12" y1="33" x2="30" y2="33" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="38" cy="38" r="9" fill="#1F2937"/>
          <rect x="34" y="35" width="8" height="6" fill="#10B981"/>
        </svg>
      )
    },
    {
      id: 'device-info',
      name: 'DEVICE_INFO.png',
      label: 'Device Info',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="4" width="32" height="40" rx="4" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2"/>
          <rect x="10" y="8" width="28" height="32" rx="2" fill="#60A5FA"/>
          <circle cx="24" cy="24" r="8" fill="white"/>
          <circle cx="24" cy="19" r="2" fill="#3B82F6"/>
          <rect x="22" y="23" width="4" height="8" rx="1" fill="#3B82F6"/>
          <circle cx="24" cy="38" r="2.5" fill="#1E40AF"/>
        </svg>
      )
    },
    {
      id: 'device-ips',
      name: 'DEVICE_IPS.png',
      label: 'Device IPs',
      svg: (
        <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" fill="#10B981"/>
          <circle cx="24" cy="24" r="16" fill="#34D399"/>
          <circle cx="24" cy="24" r="14" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="24" cy="24" r="8" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="24" cy="24" r="2" fill="white"/>
          <line x1="24" y1="4" x2="24" y2="44" stroke="white" strokeWidth="2"/>
          <line x1="4" y1="24" x2="44" y2="24" stroke="white" strokeWidth="2"/>
          <path d="M12 12 Q24 18 36 12" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M12 36 Q24 30 36 36" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
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
      label: 'Empty',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="transparent"/>
          <rect x="10" y="7" width="20" height="26" rx="2" fill="white"/>
          <line x1="13" y1="12" x2="27" y2="12" stroke="#BDBDBD" strokeWidth="2"/>
          <line x1="13" y1="17" x2="27" y2="17" stroke="#BDBDBD" strokeWidth="2"/>
          <line x1="13" y1="22" x2="27" y2="22" stroke="#BDBDBD" strokeWidth="2"/>
          <line x1="13" y1="27" x2="24" y2="27" stroke="#BDBDBD" strokeWidth="2"/>
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
          <rect x="2" y="4" width="36" height="26" rx="2" fill="#66B2FF"/>
          <rect x="4" y="6" width="32" height="21" fill="#42A5F5"/>
          <rect x="14" y="30" width="12" height="2" fill="#1976D2"/>
          <rect x="9" y="32" width="22" height="2" rx="1" fill="#1976D2"/>
          <circle cx="11" cy="11" r="3.5" fill="white"/>
          <path d="M7 20 C7 17 9 15 11 15 C13 15 15 17 15 20" fill="white"/>
          <rect x="19" y="10" width="16" height="2.5" fill="white" rx="1"/>
          <rect x="19" y="14" width="13" height="2.5" fill="white" rx="1"/>
          <rect x="19" y="18" width="15" height="2.5" fill="white" rx="1"/>
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
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Batch Improved Icons</h1>
          <p className="text-gray-600">Professional icon set with modern design and multiple export options</p>
        </div>

        <div className="mb-6">
          <button
            onClick={downloadAll}
            disabled={downloading}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {downloading ? 'Downloading All PNGs...' : 'Download All as PNG'}
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {icons.map((icon) => (
            <div key={icon.id} className="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
              <div id={icon.id} className="p-2 bg-gray-50 rounded">
                {icon.svg}
              </div>
              <span className="text-xs font-medium text-gray-700 text-center leading-tight">{icon.label}</span>
              <div className="flex gap-2 w-full">
                <button 
                  onClick={(e) => {
                    const svg = e.target.closest('.flex').parentElement.querySelector('svg');
                    downloadPNG(svg, icon.name);
                  }} 
                  className="flex-1 text-xs bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600 transition-colors font-medium"
                >
                  PNG
                </button>
                <button 
                  onClick={(e) => {
                    const svg = e.target.closest('.flex').parentElement.querySelector('svg');
                    downloadSVG(svg, icon.name.replace('.png', '.svg'));
                  }} 
                  className="flex-1 text-xs bg-gray-600 text-white px-3 py-1.5 rounded hover:bg-gray-700 transition-colors font-medium"
                >
                  SVG
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">📦 Download Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Icon Specifications:</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>All icons are 40×40px PNG files optimized for web</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>SVG versions available for infinite scalability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Filenames match original naming convention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>{icons.length} icons</strong> ready to download</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Design Features:</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Modern flat design with depth and shadows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Consistent color palette across all icons</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>High contrast for better visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Semantic colors (red for delete, green for success)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchImprovedIcons;
