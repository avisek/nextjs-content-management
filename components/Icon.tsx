import cn from '@/utils/cn'
import React from 'react'

const icons = {
  dashboard: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999974 12.77 0.939974 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z"/>
      <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"/>
    </svg>
  ),
  content: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"/>
      <path d="M22 10.75H18C14.58 10.75 13.25 9.41999 13.25 5.99999V1.99999C13.25 1.69999 13.43 1.41999 13.71 1.30999C13.99 1.18999 14.31 1.25999 14.53 1.46999L22.53 9.46999C22.74 9.67999 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.80999V5.99999C14.75 8.57999 15.42 9.24999 18 9.24999H20.19L14.75 3.80999Z"/>
      <path d="M13 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H13C13.41 12.25 13.75 12.59 13.75 13C13.75 13.41 13.41 13.75 13 13.75Z"/>
      <path d="M11 17.75H7C6.59 17.75 6.25 17.41 6.25 17C6.25 16.59 6.59 16.25 7 16.25H11C11.41 16.25 11.75 16.59 11.75 17C11.75 17.41 11.41 17.75 11 17.75Z"/>
    </svg>
  ),
  team: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.15963 11.62C9.12963 11.62 9.10963 11.62 9.07963 11.62C9.02963 11.61 8.95963 11.61 8.89963 11.62C5.99963 11.53 3.80963 9.25 3.80963 6.44C3.80963 3.58 6.13963 1.25 8.99963 1.25C11.8596 1.25 14.1896 3.58 14.1896 6.44C14.1796 9.25 11.9796 11.53 9.18963 11.62C9.17963 11.62 9.16963 11.62 9.15963 11.62ZM8.99963 2.75C6.96963 2.75 5.30963 4.41 5.30963 6.44C5.30963 8.44 6.86963 10.05 8.85963 10.12C8.91963 10.11 9.04963 10.11 9.17963 10.12C11.1396 10.03 12.6796 8.42 12.6896 6.44C12.6896 4.41 11.0296 2.75 8.99963 2.75Z"/>
      <path d="M16.5396 11.75C16.5096 11.75 16.4796 11.75 16.4496 11.74C16.0396 11.78 15.6196 11.49 15.5796 11.08C15.5396 10.67 15.7896 10.3 16.1996 10.25C16.3196 10.24 16.4496 10.24 16.5596 10.24C18.0196 10.16 19.1596 8.96 19.1596 7.49C19.1596 5.97 17.9296 4.74 16.4096 4.74C15.9996 4.75 15.6596 4.41 15.6596 4C15.6596 3.59 15.9996 3.25 16.4096 3.25C18.7496 3.25 20.6596 5.16 20.6596 7.5C20.6596 9.8 18.8596 11.66 16.5696 11.75C16.5596 11.75 16.5496 11.75 16.5396 11.75Z"/>
      <path d="M9.16961 22.55C7.20961 22.55 5.23961 22.05 3.74961 21.05C2.35961 20.13 1.59961 18.87 1.59961 17.5C1.59961 16.13 2.35961 14.86 3.74961 13.93C6.74961 11.94 11.6096 11.94 14.5896 13.93C15.9696 14.85 16.7396 16.11 16.7396 17.48C16.7396 18.85 15.9796 20.12 14.5896 21.05C13.0896 22.05 11.1296 22.55 9.16961 22.55ZM4.57961 15.19C3.61961 15.83 3.09961 16.65 3.09961 17.51C3.09961 18.36 3.62961 19.18 4.57961 19.81C7.06961 21.48 11.2696 21.48 13.7596 19.81C14.7196 19.17 15.2396 18.35 15.2396 17.49C15.2396 16.64 14.7096 15.82 13.7596 15.19C11.2696 13.53 7.06961 13.53 4.57961 15.19Z"/>
      <path d="M18.3396 20.75C17.9896 20.75 17.6796 20.51 17.6096 20.15C17.5296 19.74 17.7896 19.35 18.1896 19.26C18.8196 19.13 19.3996 18.88 19.8496 18.53C20.4196 18.1 20.7296 17.56 20.7296 16.99C20.7296 16.42 20.4196 15.88 19.8596 15.46C19.4196 15.12 18.8696 14.88 18.2196 14.73C17.8196 14.64 17.5596 14.24 17.6496 13.83C17.7396 13.43 18.1396 13.17 18.5496 13.26C19.4096 13.45 20.1596 13.79 20.7696 14.26C21.6996 14.96 22.2296 15.95 22.2296 16.99C22.2296 18.03 21.6896 19.02 20.7596 19.73C20.1396 20.21 19.3596 20.56 18.4996 20.73C18.4396 20.75 18.3896 20.75 18.3396 20.75Z"/>
    </svg>
  ),
  user: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.0001 22.7498H9.00014C7.68014 22.7498 6.58015 22.6198 5.65015 22.3398C5.31015 22.2398 5.09015 21.9098 5.11015 21.5598C5.36015 18.5698 8.39015 16.2197 12.0001 16.2197C15.6101 16.2197 18.6301 18.5598 18.8901 21.5598C18.9201 21.9198 18.7001 22.2398 18.3501 22.3398C17.4201 22.6198 16.3201 22.7498 15.0001 22.7498ZM6.72015 21.0598C7.38015 21.1898 8.13015 21.2498 9.00014 21.2498H15.0001C15.8701 21.2498 16.6201 21.1898 17.2801 21.0598C16.7501 19.1398 14.5601 17.7197 12.0001 17.7197C9.44015 17.7197 7.25015 19.1398 6.72015 21.0598Z"/>
      <path d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9999 14.92C9.60992 14.92 7.66992 12.97 7.66992 10.58C7.66992 8.19002 9.60992 6.25 11.9999 6.25C14.3899 6.25 16.3299 8.19002 16.3299 10.58C16.3299 12.97 14.3899 14.92 11.9999 14.92ZM11.9999 7.75C10.4399 7.75 9.16992 9.02002 9.16992 10.58C9.16992 12.15 10.4399 13.42 11.9999 13.42C13.5599 13.42 14.8299 12.15 14.8299 10.58C14.8299 9.02002 13.5599 7.75 11.9999 7.75Z"/>
    </svg>
  ),
  computer: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 17.6998H6.21C2.41 17.6998 1.25 16.5398 1.25 12.7398V6.73979C1.25 2.93979 2.41 1.77979 6.21 1.77979H16.74C20.54 1.77979 21.7 2.93979 21.7 6.73979C21.7 7.14979 21.36 7.48979 20.95 7.48979C20.54 7.48979 20.2 7.14979 20.2 6.73979C20.2 3.79979 19.68 3.27979 16.74 3.27979H6.21C3.27 3.27979 2.75 3.79979 2.75 6.73979V12.7398C2.75 15.6798 3.27 16.1998 6.21 16.1998H10C10.41 16.1998 10.75 16.5398 10.75 16.9498C10.75 17.3598 10.41 17.6998 10 17.6998Z"/>
      <path d="M10 22.2199C9.59 22.2199 9.25 21.8799 9.25 21.4699V16.9399C9.25 16.5299 9.59 16.1899 10 16.1899C10.41 16.1899 10.75 16.5299 10.75 16.9399V21.4699C10.75 21.8899 10.41 22.2199 10 22.2199Z"/>
      <path d="M10 13.7002H2C1.59 13.7002 1.25 13.3602 1.25 12.9502C1.25 12.5402 1.59 12.2002 2 12.2002H10C10.41 12.2002 10.75 12.5402 10.75 12.9502C10.75 13.3602 10.41 13.7002 10 13.7002Z"/>
      <path d="M9.99999 22.2202H6.73999C6.32999 22.2202 5.98999 21.8802 5.98999 21.4702C5.98999 21.0602 6.32999 20.7202 6.73999 20.7202H9.99999C10.41 20.7202 10.75 21.0602 10.75 21.4702C10.75 21.8802 10.41 22.2202 9.99999 22.2202Z"/>
      <path d="M19.04 22.2198H15.49C12.72 22.2198 11.78 21.2798 11.78 18.5098V12.7998C11.78 10.0298 12.72 9.08984 15.49 9.08984H19.04C21.81 9.08984 22.75 10.0298 22.75 12.7998V18.5098C22.75 21.2898 21.81 22.2198 19.04 22.2198ZM15.49 10.5898C13.53 10.5898 13.28 10.8398 13.28 12.7998V18.5098C13.28 20.4698 13.53 20.7198 15.49 20.7198H19.04C21 20.7198 21.25 20.4698 21.25 18.5098V12.7998C21.25 10.8398 21 10.5898 19.04 10.5898H15.49Z"/>
      <path d="M17.3 18.9698C17.04 18.9698 16.78 18.8698 16.59 18.6798C16.5 18.5898 16.43 18.4798 16.38 18.3598C16.33 18.2298 16.3 18.0998 16.3 17.9698C16.3 17.7098 16.41 17.4498 16.59 17.2698C16.82 17.0398 17.17 16.9298 17.5 16.9898C17.56 17.0098 17.62 17.0298 17.68 17.0498C17.74 17.0798 17.8 17.1098 17.85 17.1398C17.91 17.1798 17.96 17.2198 18.01 17.2698C18.19 17.4498 18.3 17.7098 18.3 17.9698C18.3 18.0998 18.27 18.2298 18.22 18.3598C18.17 18.4798 18.1 18.5898 18.01 18.6798C17.96 18.7298 17.91 18.7698 17.85 18.7998C17.8 18.8398 17.74 18.8698 17.68 18.8998C17.62 18.9198 17.56 18.9398 17.5 18.9498C17.43 18.9698 17.37 18.9698 17.3 18.9698Z"/>
    </svg>
  ),
  analytics: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.88 18.9001C6.47 18.9001 6.13 18.5601 6.13 18.1501V16.0801C6.13 15.6701 6.47 15.3301 6.88 15.3301C7.29 15.3301 7.63 15.6701 7.63 16.0801V18.1501C7.63 18.5701 7.29 18.9001 6.88 18.9001Z"/>
      <path d="M12 18.9C11.59 18.9 11.25 18.56 11.25 18.15V14C11.25 13.59 11.59 13.25 12 13.25C12.41 13.25 12.75 13.59 12.75 14V18.15C12.75 18.57 12.41 18.9 12 18.9Z"/>
      <path d="M17.12 18.9002C16.71 18.9002 16.37 18.5602 16.37 18.1502V11.9302C16.37 11.5202 16.71 11.1802 17.12 11.1802C17.53 11.1802 17.87 11.5202 17.87 11.9302V18.1502C17.87 18.5702 17.54 18.9002 17.12 18.9002Z"/>
      <path d="M6.88001 13.1799C6.54001 13.1799 6.24001 12.9499 6.15001 12.6099C6.05001 12.2099 6.29001 11.7999 6.70001 11.6999C10.38 10.7799 13.62 8.76992 16.09 5.89992L16.55 5.35992C16.82 5.04992 17.29 5.00992 17.61 5.27992C17.92 5.54992 17.96 6.01992 17.69 6.33992L17.23 6.87992C14.56 9.99992 11.04 12.1699 7.06001 13.1599C7.00001 13.1799 6.94001 13.1799 6.88001 13.1799Z"/>
      <path d="M17.12 9.5201C16.71 9.5201 16.37 9.1801 16.37 8.7701V6.6001H14.19C13.78 6.6001 13.44 6.2601 13.44 5.8501C13.44 5.4401 13.78 5.1001 14.19 5.1001H17.12C17.53 5.1001 17.87 5.4401 17.87 5.8501V8.7801C17.87 9.1901 17.54 9.5201 17.12 9.5201Z"/>
      <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"/>
    </svg>
  ),
  media: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"/>
      <path d="M10.76 16.3698C10.34 16.3698 9.95003 16.2698 9.60003 16.0698C8.80003 15.6098 8.34003 14.6698 8.34003 13.4798V10.5198C8.34003 9.33981 8.80003 8.3898 9.60003 7.9298C10.4 7.4698 11.44 7.53981 12.47 8.13981L15.04 9.6198C16.06 10.2098 16.65 11.0798 16.65 11.9998C16.65 12.9198 16.06 13.7898 15.04 14.3798L12.47 15.8598C11.89 16.1998 11.3 16.3698 10.76 16.3698ZM10.77 9.12981C10.61 9.12981 10.47 9.1598 10.36 9.2298C10.04 9.4198 9.85003 9.88981 9.85003 10.5198V13.4798C9.85003 14.1098 10.03 14.5798 10.36 14.7698C10.68 14.9598 11.18 14.8798 11.73 14.5598L14.3 13.0798C14.85 12.7598 15.16 12.3698 15.16 11.9998C15.16 11.6298 14.85 11.2298 14.3 10.9198L11.73 9.4398C11.37 9.2298 11.04 9.12981 10.77 9.12981Z"/>
    </svg>
  ),
  notification: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.02 20.5299C9.68999 20.5299 7.35999 20.1599 5.14999 19.4199C4.30999 19.1299 3.66999 18.5399 3.38999 17.7699C3.09999 16.9999 3.19999 16.1499 3.65999 15.3899L4.80999 13.4799C5.04999 13.0799 5.26999 12.2799 5.26999 11.8099V8.91992C5.26999 5.19992 8.29999 2.16992 12.02 2.16992C15.74 2.16992 18.77 5.19992 18.77 8.91992V11.8099C18.77 12.2699 18.99 13.0799 19.23 13.4899L20.37 15.3899C20.8 16.1099 20.88 16.9799 20.59 17.7699C20.3 18.5599 19.67 19.1599 18.88 19.4199C16.68 20.1599 14.35 20.5299 12.02 20.5299ZM12.02 3.66992C9.12999 3.66992 6.76999 6.01992 6.76999 8.91992V11.8099C6.76999 12.5399 6.46999 13.6199 6.09999 14.2499L4.94999 16.1599C4.72999 16.5299 4.66999 16.9199 4.79999 17.2499C4.91999 17.5899 5.21999 17.8499 5.62999 17.9899C9.80999 19.3899 14.24 19.3899 18.42 17.9899C18.78 17.8699 19.06 17.5999 19.19 17.2399C19.32 16.8799 19.29 16.4899 19.09 16.1599L17.94 14.2499C17.56 13.5999 17.27 12.5299 17.27 11.7999V8.91992C17.27 6.01992 14.92 3.66992 12.02 3.66992Z"/>
      <path d="M13.88 3.94018C13.81 3.94018 13.74 3.93018 13.67 3.91018C13.38 3.83018 13.1 3.77018 12.83 3.73018C11.98 3.62018 11.16 3.68018 10.39 3.91018C10.11 4.00018 9.80999 3.91018 9.61999 3.70018C9.42999 3.49018 9.36999 3.19018 9.47999 2.92018C9.88999 1.87018 10.89 1.18018 12.03 1.18018C13.17 1.18018 14.17 1.86018 14.58 2.92018C14.68 3.19018 14.63 3.49018 14.44 3.70018C14.29 3.86018 14.08 3.94018 13.88 3.94018Z"/>
      <path d="M12.02 22.8101C11.03 22.8101 10.07 22.4101 9.37002 21.7101C8.67002 21.0101 8.27002 20.0501 8.27002 19.0601H9.77002C9.77002 19.6501 10.01 20.2301 10.43 20.6501C10.85 21.0701 11.43 21.3101 12.02 21.3101C13.26 21.3101 14.27 20.3001 14.27 19.0601H15.77C15.77 21.1301 14.09 22.8101 12.02 22.8101Z"/>
    </svg>
  ),
  settings: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.8067 6.62337L18.1842 5.54328C17.6577 4.62936 16.4907 4.31408 15.5755 4.83847V4.83847C15.1399 5.0951 14.6201 5.16791 14.1307 5.04084C13.6413 4.91378 13.2226 4.59727 12.9668 4.16113C12.8023 3.8839 12.7139 3.56815 12.7105 3.2458V3.2458C12.7254 2.72898 12.5304 2.22816 12.17 1.85743C11.8096 1.48669 11.3145 1.27762 10.7975 1.27783H9.5435C9.03697 1.27783 8.55131 1.47967 8.194 1.8387C7.83669 2.19773 7.63717 2.68435 7.63961 3.19088V3.19088C7.6246 4.23668 6.77248 5.07657 5.72657 5.07646C5.40421 5.07311 5.08846 4.9847 4.81123 4.82017V4.82017C3.89606 4.29577 2.72911 4.61105 2.20254 5.52497L1.53435 6.62337C1.00841 7.53615 1.3194 8.70236 2.23 9.23207V9.23207C2.8219 9.5738 3.18653 10.2053 3.18653 10.8888C3.18653 11.5723 2.8219 12.2038 2.23 12.5456V12.5456C1.32056 13.0717 1.00923 14.2351 1.53435 15.1451V15.1451L2.16593 16.2344C2.41265 16.6795 2.8266 17.0081 3.31619 17.1472C3.80578 17.2863 4.33064 17.2247 4.77462 16.9758V16.9758C5.21108 16.7211 5.73119 16.6513 6.21934 16.782C6.70749 16.9126 7.12324 17.2328 7.37416 17.6714C7.5387 17.9486 7.62711 18.2644 7.63046 18.5868V18.5868C7.63046 19.6433 8.48696 20.4998 9.5435 20.4998H10.7975C11.8505 20.4998 12.7055 19.6489 12.7105 18.5959V18.5959C12.7081 18.0878 12.9089 17.5998 13.2682 17.2405C13.6275 16.8812 14.1155 16.6804 14.6236 16.6829C14.9452 16.6915 15.2596 16.7795 15.5389 16.9392V16.9392C16.4517 17.4651 17.6179 17.1541 18.1476 16.2435V16.2435L18.8067 15.1451C19.0618 14.7073 19.1318 14.1858 19.0012 13.6961C18.8706 13.2065 18.5502 12.7891 18.111 12.5364V12.5364C17.6718 12.2837 17.3514 11.8663 17.2208 11.3767C17.0902 10.8871 17.1603 10.3656 17.4154 9.92772C17.5812 9.63809 17.8214 9.39795 18.111 9.23207V9.23207C19.0161 8.70265 19.3264 7.54325 18.8067 6.63252V6.63252V6.62337Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10.1751" cy="10.8886" r="2.63616" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  headphone: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18"/>
      <path d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z"/>
    </svg>
  ),
  
  dashboard_articles: (
    <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40.7846" cy="40.8026" r="39.7846" fill="#E8E9FF" stroke="white" strokeWidth="2"/>
      <path d="M41.8648 24.519C41.7664 24.533 41.457 24.5822 41.1758 24.6244C40.5008 24.7229 39.5937 25.0322 38.9187 25.3979C37.0977 26.3752 35.8039 27.9924 35.2062 30.0455L35.0164 30.6994L34.9883 36.5846L34.9672 42.4768H32.6469C31.3742 42.4768 30.0242 42.5119 29.6516 42.5541C27.0078 42.8494 24.7789 44.4525 23.6469 46.8783C23.4922 47.2018 23.2812 47.7854 23.1828 48.158C23.0211 48.7627 23 48.9736 23 50.0002C23 51.0338 23.0211 51.2377 23.1828 51.8635C23.8086 54.2119 25.6227 56.2229 27.8305 57.0174C29.1945 57.5166 28.2664 57.4815 40.4234 57.5096C48.0242 57.5236 51.6242 57.5096 52.1445 57.4533C55.3297 57.1299 57.8609 54.9713 58.7258 51.8424L58.9156 51.1604V41.0002V30.84L58.7258 30.158C57.875 27.0713 55.3648 24.8986 52.25 24.5541C51.6312 24.4838 42.3148 24.4557 41.8648 24.519ZM46.3016 30.6361C46.8289 30.7979 47.2016 31.0299 47.6164 31.4588C48.3477 32.2393 48.4742 32.7385 48.4742 34.9533C48.4742 35.8252 48.4461 36.7182 48.4039 36.9502C48.193 38.2369 47.1875 39.2424 45.9008 39.4533C45.6687 39.4955 44.7758 39.5236 43.9039 39.5236C41.6891 39.5236 41.1898 39.3971 40.4094 38.6658C39.9734 38.2439 39.7414 37.8783 39.5797 37.3299C39.4812 36.9924 39.4672 36.6197 39.4883 34.8268L39.5094 32.7314L39.7766 32.1971C40.1562 31.4236 40.7891 30.8893 41.6187 30.6221C41.8156 30.5588 42.4906 30.5307 43.9109 30.5307C45.5562 30.5236 45.9852 30.5447 46.3016 30.6361ZM53.6914 42.7088C54.282 43.0533 54.5633 43.7565 54.3734 44.4244C54.2609 44.8393 53.825 45.2963 53.4242 45.4158C53.2062 45.4791 51.6312 45.5002 46.8992 45.5002C41.4219 45.5002 40.6344 45.4861 40.4023 45.3877C39.8469 45.1557 39.4742 44.6143 39.4742 44.0236C39.4742 43.2854 39.868 42.765 40.5992 42.54C40.6977 42.5119 43.6086 42.4908 47.068 42.4979L53.3609 42.5119L53.6914 42.7088ZM34.9531 48.1158C34.925 50.9916 34.9039 51.1322 34.468 51.9971C33.7297 53.4666 32.3445 54.3736 30.6852 54.4791C28.5758 54.6127 26.5648 53.115 26.0867 51.0549C25.9461 50.4713 25.9461 49.5291 26.0867 48.9455C26.375 47.715 27.2961 46.5619 28.4352 45.9994C29.3773 45.5424 29.6023 45.5143 32.4641 45.5072L34.9883 45.5002L34.9531 48.1158ZM53.593 48.6572C54.5703 49.1565 54.7391 50.401 53.9375 51.1041C53.7969 51.2307 53.5578 51.3643 53.4172 51.4065C53.2273 51.4627 51.2375 51.4768 46.7797 51.4627L40.4164 51.4416L40.1562 51.2658C40.0086 51.1674 39.8047 50.9635 39.6992 50.8158C39.5305 50.5697 39.5094 50.4713 39.5094 49.9932C39.5094 49.501 39.5305 49.4236 39.7203 49.1494C39.8398 48.9877 40.0719 48.7768 40.2406 48.6854L40.55 48.5236H46.9414C53.0937 48.5236 53.3398 48.5307 53.593 48.6572Z" fill="#7750F1"/>
      <path d="M42.477 33.5258C42.4488 33.5469 42.4277 34.2289 42.4277 35.0375V36.5H43.9395H45.4512V34.9883V33.4766H43.9887C43.1801 33.4766 42.498 33.4977 42.477 33.5258Z" fill="#7750F1"/>
    </svg>
  ),
  dashboard_categories: (
    <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="39.6071" cy="39.8031" r="38.7846" fill="#E8E9FF"/>
      <path d="M25.6142 23.2377C24.4259 23.5541 23.4978 24.5033 23.1814 25.7057C23.0197 26.3174 23.0267 42.44 23.1814 43.0588C23.4978 44.2682 24.44 45.2033 25.6564 45.5197C26.2541 45.6744 35.6478 45.6744 36.2455 45.5197C37.4619 45.2033 38.4041 44.2682 38.7205 43.0588C38.8752 42.44 38.8822 26.3174 38.7205 25.7057C38.4041 24.4893 37.4689 23.5471 36.2595 23.2307C35.6619 23.076 26.1978 23.083 25.6142 23.2377Z" fill="#7750F1"/>
      <path d="M43.6142 23.2375C42.4259 23.5539 41.4978 24.5031 41.1814 25.7055C41.0337 26.282 41.0337 28.975 41.1814 29.5586C41.4978 30.768 42.44 31.7031 43.6564 32.0195C44.2611 32.1812 53.6478 32.1742 54.2595 32.0195C55.4689 31.7031 56.4041 30.7609 56.7205 29.5445C56.8681 28.975 56.8681 26.275 56.7205 25.7055C56.4041 24.489 55.4689 23.5469 54.2595 23.2305C53.6619 23.0758 44.1978 23.0828 43.6142 23.2375Z" fill="#7750F1"/>
      <path d="M43.6142 34.4877C42.4259 34.8041 41.4978 35.7533 41.1814 36.9557C41.0197 37.5674 41.0267 53.69 41.1814 54.3088C41.4978 55.5182 42.44 56.4533 43.6564 56.7697C44.2541 56.9244 53.6478 56.9244 54.2455 56.7697C55.4619 56.4533 56.4041 55.5182 56.7205 54.3088C56.8752 53.69 56.8822 37.5674 56.7205 36.9557C56.4041 35.7393 55.4689 34.7971 54.2595 34.4807C53.6619 34.326 44.1978 34.333 43.6142 34.4877Z" fill="#7750F1"/>
      <path d="M25.6142 47.9875C24.4259 48.3039 23.4978 49.2531 23.1814 50.4555C23.0338 51.032 23.0338 53.725 23.1814 54.3086C23.4978 55.518 24.44 56.4531 25.6564 56.7695C26.2611 56.9312 35.6478 56.9242 36.2595 56.7695C37.4689 56.4531 38.4041 55.5109 38.7205 54.2945C38.8681 53.725 38.8681 51.025 38.7205 50.4555C38.4041 49.239 37.4689 48.2969 36.2595 47.9805C35.6619 47.8258 26.1978 47.8328 25.6142 47.9875Z" fill="#7750F1"/>
    </svg>
  ),
  dashboard_stories: (
    <svg width="78" height="79" viewBox="0 0 78 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="38.8064" cy="39.7846" r="38.7846" fill="#E8E9FF"/>
      <path d="M44.8085 24.7211C44.7101 24.8125 44.6468 25.0094 44.5906 25.4312C44.3726 27.0414 43.1984 28.1734 41.5531 28.3562C41.0117 28.4195 40.9203 28.4828 40.9203 28.7852C40.9203 29.1016 41.0468 29.1789 41.6726 29.2492C43.1984 29.418 44.3796 30.5852 44.5906 32.1391C44.6749 32.7437 44.8015 32.9688 45.0687 32.9688C45.2656 32.9688 45.4906 32.6312 45.4906 32.343C45.4906 31.9633 45.6804 31.2883 45.8914 30.9297C46.4539 29.9664 47.5999 29.2422 48.5492 29.2422C49.0765 29.2422 49.407 28.8062 49.0976 28.518C49.0273 28.4617 48.7249 28.3773 48.4085 28.3352C47.0445 28.1523 45.9335 27.1891 45.596 25.9023C45.5398 25.6703 45.4906 25.368 45.4906 25.2133C45.4906 25.0234 45.4414 24.8969 45.3148 24.7773C45.1109 24.5664 44.9914 24.5594 44.8085 24.7211Z" fill="#7750F1"/>
      <path d="M32.1026 27.7165C32.0112 27.7798 31.962 27.9626 31.9198 28.3353C31.8143 29.2423 31.5049 29.8681 30.8721 30.4587C30.3237 30.972 29.4166 31.3517 28.7416 31.3517C28.3057 31.3517 28.0596 31.7033 28.2846 32.0126C28.3479 32.104 28.5588 32.1673 28.9877 32.2306C30.3518 32.4345 31.3573 33.2501 31.7721 34.4947C31.8565 34.7337 31.9198 35.0572 31.9198 35.2119C31.9198 35.7533 32.1237 35.9923 32.5174 35.8939C32.7143 35.8447 32.7354 35.7814 32.8338 35.0853C33.0377 33.6298 34.1838 32.4697 35.6252 32.2517C35.8924 32.2165 36.1666 32.1673 36.251 32.1533C36.3284 32.1392 36.4338 32.0408 36.4831 31.9353C36.5534 31.7736 36.5463 31.7244 36.4338 31.5697C36.3565 31.4572 36.2159 31.3798 36.0963 31.3658C35.9838 31.3587 35.7096 31.3165 35.4776 31.2744C34.1416 31.0353 33.0377 29.8681 32.8338 28.497C32.7987 28.2298 32.7635 27.9767 32.7635 27.9275C32.7635 27.6744 32.3416 27.5408 32.1026 27.7165Z" fill="#7750F1"/>
      <path d="M39.3377 35.1415C38.9229 35.254 38.7401 35.3595 38.4307 35.6408C37.376 36.6181 37.7346 38.4462 39.0776 38.9033C40.7229 39.4658 42.2346 37.8697 41.5526 36.2876C41.3768 35.8869 40.9057 35.4087 40.5331 35.247C40.2307 35.1205 39.612 35.0712 39.3377 35.1415Z" fill="#7750F1"/>
      <path d="M26.428 37.9187C26.2874 37.9679 26.0764 38.0734 25.9569 38.1578C25.6897 38.3476 25.3803 38.9593 25.3803 39.2898C25.3733 39.7046 25.6827 42.3203 25.7389 42.3203C25.76 42.3203 28.5796 42.7281 31.9967 43.2343C35.4139 43.7335 38.2264 44.1273 38.2475 44.0992C38.2686 44.0781 37.9522 43.7476 37.5444 43.3609C34.521 40.4921 31.1741 38.6429 27.7569 37.9609C26.9413 37.7992 26.7725 37.7921 26.428 37.9187Z" fill="#7750F1"/>
      <path d="M49.9554 37.9963C47.1288 38.6221 44.4429 39.951 41.9749 41.9549C40.9765 42.7635 39.5983 44.0432 39.6616 44.1065C39.6827 44.1276 42.1788 43.7831 45.2163 43.3401C52.1913 42.3135 52.2054 42.3135 52.2124 42.2995C52.2687 42.2151 52.5288 39.4096 52.5007 39.1846C52.4515 38.7487 52.1562 38.2776 51.7835 38.0667C51.3476 37.8065 50.8905 37.7854 49.9554 37.9963Z" fill="#7750F1"/>
      <path d="M24.4593 43.1219C24.0234 43.2344 23.7281 43.4594 23.5031 43.8531L23.3062 44.1836L23.2851 46.1312L23.264 48.0859H30.2179C36.8624 48.0859 37.1789 48.093 37.2843 48.2125C37.3898 48.325 37.4039 48.55 37.4039 49.9V51.4609H38.9507H40.4976V49.893C40.4976 48.4586 40.5117 48.3109 40.6242 48.2055C40.7437 48.093 41.3343 48.0859 47.6976 48.0859H54.6374L54.6164 46.1312L54.5953 44.1836L54.3984 43.8461C54.2929 43.6633 54.082 43.4383 53.9414 43.3398C53.4351 43.0094 53.2593 43.0094 50.9882 43.3398C49.8351 43.5086 46.7203 43.9727 44.0484 44.3594C41.3835 44.7531 39.0843 45.0766 38.9507 45.0766C38.8171 45.0766 37.4109 44.8797 35.8218 44.6477C31.4835 44.0078 30.2109 43.825 27.5953 43.4453C26.2804 43.2555 25.1132 43.0797 24.9937 43.0656C24.8812 43.0445 24.6351 43.0727 24.4593 43.1219Z" fill="#7750F1"/>
      <path d="M23.0604 49.0914C21.9495 49.675 21.9565 51.1867 23.0604 51.8125L23.3768 51.9883L28.4463 52.0094L33.5159 52.0305L33.5651 52.3469C33.6284 52.8391 34.0362 53.6336 34.4581 54.0906C34.9362 54.618 35.5338 55.0047 36.1737 55.2086C36.6377 55.3563 36.7854 55.3633 38.951 55.3633C41.1166 55.3633 41.2643 55.3563 41.7284 55.2086C42.3682 55.0047 42.9659 54.618 43.444 54.0906C43.8659 53.6336 44.2737 52.8391 44.337 52.3469L44.3862 52.0305L49.4557 52.0094L54.5252 51.9883L54.8416 51.8125C55.9456 51.1867 55.9526 49.675 54.8416 49.0914L54.5393 48.9297H48.0565C41.9604 48.9297 41.5666 48.9367 41.4612 49.0563C41.3698 49.1547 41.3487 49.4148 41.3276 50.5258L41.3065 51.8828L41.1096 52.0727L40.9198 52.2695H38.951H36.9823L36.7924 52.0727L36.5956 51.8828L36.5745 50.5258C36.5534 49.4148 36.5323 49.1547 36.4409 49.0563C36.3354 48.9367 35.9416 48.9297 29.8456 48.9297H23.3627L23.0604 49.0914Z" fill="#7750F1"/>
    </svg>
  ),
  dashboard_advetisements: (
    <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="39.6279" cy="39.7846" r="38.7846" fill="#E8E9FF"/>
      <path d="M25.8926 27.1054C25.541 27.2249 25.2949 27.4569 25.1332 27.8085C25.0067 28.0757 24.9996 28.5819 24.9996 40.4999C24.9996 52.3897 25.0067 52.9241 25.1332 53.1913C25.2879 53.5429 25.6184 53.8312 25.9699 53.9296C26.3356 54.028 53.6168 54.028 53.9824 53.9296C54.334 53.8312 54.6645 53.5429 54.8192 53.1913C54.9457 52.9241 54.9528 52.3897 54.9528 40.4999C54.9528 28.6101 54.9457 28.0757 54.8192 27.8085C54.6645 27.4569 54.334 27.1687 53.9824 27.0702C53.8067 27.021 49.2153 26.9999 39.941 26.9999C28.452 27.0069 26.1176 27.021 25.8926 27.1054ZM38.4504 40.4507C39.7512 43.7062 40.8199 46.3921 40.8199 46.4272C40.8199 46.4554 40.0887 46.4694 39.1887 46.4624L37.5574 46.4413L37.2692 45.7171L36.9879 44.9999L34.5692 45.014L32.1574 45.0351L31.8692 45.7522L31.5879 46.4765H29.9356C28.6489 46.4765 28.2973 46.4554 28.3254 46.3851C28.8457 45.0702 33.0364 34.6147 33.0645 34.5726C33.0785 34.5444 33.7676 34.5233 34.5903 34.5233H36.0809L38.4504 40.4507ZM50.4528 40.4999V46.4765H47.8653C44.9895 46.4765 44.8418 46.4624 43.9207 46.0124C43.2809 45.696 42.5074 44.9788 42.1348 44.3601C41.7059 43.6288 41.509 42.9187 41.502 42.0468C41.4949 41.1749 41.6215 40.6194 41.9871 39.8952C42.3106 39.2413 42.8379 38.6577 43.4707 38.2429C44.3356 37.6804 45.1653 37.4835 46.677 37.4765H47.4996V35.9999V34.5233H48.9762H50.4528V40.4999Z" fill="#7750F1"/>
      <path d="M34.5856 38.3825C34.5856 38.4036 34.3184 39.0997 34.002 39.9294L33.4184 41.4411L34.5715 41.4622C35.2114 41.4692 35.7387 41.4692 35.7528 41.4551C35.7668 41.4411 35.5067 40.738 35.1832 39.8872C34.8598 39.0434 34.5856 38.3614 34.5856 38.3825Z" fill="#7750F1"/>
      <path d="M45.336 40.1969C44.8298 40.4641 44.5485 40.9 44.5134 41.5047C44.4853 41.8984 44.5064 41.9617 44.7243 42.2852C44.879 42.5172 45.0689 42.6859 45.3079 42.8125C45.6243 42.9742 45.7298 42.9883 46.5735 42.9883H47.4876L47.5087 41.4906L47.5228 40H46.6157C45.7579 40 45.6876 40.0141 45.336 40.1969Z" fill="#7750F1"/>
    </svg>
  ),
} as const

export type IconProps = {
  icon: keyof typeof icons
  className?: string
}

export default function Icon({ icon, className = '' }: IconProps) {
  const Icon = icons[icon]
  return React.cloneElement(Icon, {
    className: cn(Icon.props.className, className),
  })
}
