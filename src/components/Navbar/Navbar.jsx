//External imports
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

//styles
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const menuList = ['home', 'about', 'work', 'skills', 'testimonials', 'contact'];

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <svg id={'logo'} width="178" height="38" viewBox="0 0 178 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.3648 37C13.075 37 9.36774 36.1366 6.24308 34.4097C2.74769 32.6123 1 30.3392 1 27.5903C1 24.7709 2.50937 22.2511 5.52812 20.0308C8.44094 17.8811 12.0158 16.5419 16.2526 16.0132C16.1467 15.6255 16.0408 15.2379 15.9348 14.8502C15.8819 14.4626 15.8554 14.0749 15.8554 13.6872C15.8554 11.8194 16.4909 9.96916 17.762 8.13656C19.1389 6.12775 20.9131 4.6652 23.0845 3.7489C27.2684 1.9163 32.1407 1 37.7016 1C41.6736 1 46.2547 1.51101 51.4448 2.53304C52.1862 2.67401 53.6426 3.00881 55.814 3.53744C58.0384 4.03084 60.9777 4.73568 64.6319 5.65198C67.8625 4.24229 70.8548 3.53744 73.6087 3.53744C76.2567 3.53744 77.5807 4.17181 77.5807 5.44053C77.5807 6.74449 75.8595 7.39648 72.4171 7.39648C70.5105 7.39648 68.1538 7.07929 65.3469 6.44493C61.9574 8.77092 58.6474 12.489 55.4168 17.5991C51.9744 23.0969 47.5787 27.3965 42.2297 30.4978C40.3761 31.5903 38.5225 32.5242 36.6688 33.2996C34.8682 34.0749 33.0675 34.7092 31.2669 35.2026C29.4662 35.6608 27.5067 36.0661 25.3883 36.4185C23.2699 36.8062 20.9661 37 18.4769 37H17.3648ZM18.5564 36.207C23.3758 36.207 28.1687 34.9383 32.9351 32.4009C34.8947 31.3789 36.7483 30.2159 38.496 28.9119C40.2437 27.5727 41.8854 26.0925 43.4213 24.4714C44.1627 23.6608 45.0895 22.6564 46.2017 21.4581C47.3139 20.2247 48.6114 18.815 50.0943 17.2291C51.4183 15.8899 52.7953 14.5507 54.2252 13.2115C55.7081 11.8722 57.244 10.533 58.8328 9.19383C59.5742 8.59471 60.3421 8.04846 61.1365 7.55506C61.9839 7.02643 62.8578 6.53304 63.7581 6.07489C53.113 3.7489 45.0895 2.5859 39.6876 2.5859C33.2794 2.5859 28.1157 3.76652 24.1967 6.12775C22.5549 7.11454 21.1779 8.38326 20.0657 9.93392C19.0595 11.4141 18.5564 12.9295 18.5564 14.4802C18.5564 14.7269 18.5564 14.9559 18.5564 15.1674C18.5564 15.3789 18.5829 15.5903 18.6358 15.8018C18.9006 15.7665 19.1389 15.7489 19.3508 15.7489C19.5626 15.7489 19.7745 15.7489 19.9863 15.7489C25.6531 15.7489 29.1485 17.2996 30.4725 20.4009C32.8027 19.7313 34.8152 18.7797 36.51 17.5463C38.3106 16.1718 39.4493 14.7093 39.9259 13.1586C39.9259 13.1586 39.8994 13.141 39.8465 13.1057C39.8465 13.0705 39.8465 13.0176 39.8465 12.9471C39.8465 12.6652 39.9789 12.5242 40.2437 12.5242C40.4555 12.5242 40.5614 12.6123 40.5614 12.7885C40.5614 12.8238 40.5614 12.8766 40.5614 12.9471C40.5614 13.0176 40.5349 13.1057 40.482 13.2115C39.105 16.9824 35.8215 19.5551 30.6313 20.9295C30.6843 21.1762 30.7108 21.4229 30.7108 21.6696C30.7637 21.8811 30.7902 22.1101 30.7902 22.3568C30.7902 24.5419 29.4927 26.3921 26.8976 27.9075C24.4085 29.4229 21.4957 30.1806 18.1592 30.1806C17.7885 30.1806 17.6031 30.0925 17.6031 29.9163C17.6031 29.6696 17.8679 29.5286 18.3975 29.4934C21.787 29.2467 24.4879 28.5242 26.5004 27.326C28.7248 25.9868 29.8369 24.2247 29.8369 22.0396C29.8369 21.8634 29.8105 21.7048 29.7575 21.5639C29.7575 21.4229 29.7575 21.2819 29.7575 21.141C28.5924 21.3877 27.3478 21.511 26.0238 21.511C23.7465 21.511 21.7605 21.0705 20.0657 20.1894C19.2184 19.7313 18.5034 19.2203 17.9209 18.6564C17.3383 18.0925 16.8881 17.4405 16.5704 16.7004C12.9161 17.5463 9.89735 19.0617 7.51413 21.2467C5.18387 23.4317 4.01874 25.7753 4.01874 28.2775C4.01874 30.9207 5.47515 32.9648 8.38798 34.4097C10.983 35.6079 14.3725 36.207 18.5564 36.207ZM72.4171 6.97357C75.3299 6.97357 76.7863 6.46255 76.7863 5.44053C76.7863 4.34802 75.6742 3.80176 73.4498 3.80176C70.9077 3.80176 68.4451 4.54185 66.0619 6.02202C68.7628 6.65639 70.8813 6.97357 72.4171 6.97357ZM26.3416 20.9824C27.4008 20.9824 28.4865 20.859 29.5986 20.6123C29.0161 19.2731 27.8509 18.1982 26.1032 17.3877C24.3555 16.6123 22.449 16.2247 20.3835 16.2247C20.1717 16.2247 19.9069 16.2423 19.5891 16.2775C19.3243 16.2775 19.0595 16.2952 18.7947 16.3304C19.2713 17.5639 20.1452 18.6388 21.4162 19.5551C22.8462 20.5066 24.4879 20.9824 26.3416 20.9824Z" stroke="black" strokeWidth="2"/>
          <path d="M66.95 34.5154C64.6197 34.5154 62.8455 33.8458 61.6275 32.5066C60.5153 31.3789 59.9592 30.0044 59.9592 28.3833C59.9592 25.5991 61.2832 23.0088 63.9312 20.6123C66.8441 18.0044 70.3394 16.7004 74.4174 16.7004C76.4829 16.7004 78.0717 17.1762 79.1838 18.1278C80.243 19.0441 80.7727 20.207 80.7727 21.6167C80.7727 22.2511 80.6667 22.9031 80.4549 23.5727C80.296 24.2423 80.0312 24.9471 79.6605 25.6872C78.8661 27.2379 77.8863 28.4537 76.7212 29.3348L76.8801 29.4934C77.4097 29.7401 78.0452 29.8634 78.7866 29.8634C80.3225 29.8634 81.62 29.5286 82.6792 28.859C83.7384 28.1894 84.93 26.9912 86.2541 25.2643C86.307 25.1233 86.4129 25.0529 86.5718 25.0529C86.6777 25.0529 86.7572 25.1057 86.8101 25.2115C86.8631 25.2819 86.8366 25.3877 86.7307 25.5286C85.6185 27.0793 84.4269 28.2599 83.1559 29.0705C81.9378 29.8811 80.5078 30.2863 78.8661 30.2863C77.8069 30.2863 76.986 30.0925 76.4034 29.7048C75.8738 30.3392 75.2912 30.9383 74.6557 31.5022C74.0202 32.0308 73.3052 32.5066 72.5108 32.9295C70.7102 33.9868 68.8566 34.5154 66.95 34.5154ZM67.5061 34.0925C70.313 34.0925 73.0669 32.6652 75.7679 29.8106C75.7679 29.7048 75.8473 29.5991 76.0062 29.4934C75.0529 28.4361 74.5763 27.4317 74.5763 26.4802C74.5763 26.4449 74.5763 26.3745 74.5763 26.2687C74.5763 26.1278 74.6028 25.9515 74.6557 25.7401C74.7087 25.3524 74.8146 24.9648 74.9735 24.5771C75.1324 24.1542 75.3972 23.7665 75.7679 23.4141C76.5623 22.5683 77.5156 22.1454 78.6278 22.1454H79.3427C79.5546 22.1806 79.7134 22.1982 79.8194 22.1982C79.9253 22.1982 80.0047 22.1982 80.0577 22.1982C80.0577 19.0264 78.5483 17.4405 75.5296 17.4405C72.9875 17.4405 70.5778 18.4626 68.3005 20.5066C66.4469 22.1278 65.1228 23.9427 64.3284 25.9515C63.8518 27.0441 63.6135 28.1894 63.6135 29.3877C63.6135 32.5242 64.911 34.0925 67.5061 34.0925Z" stroke="black" strokeWidth="2"/>
          <path d="M78.5675 35.3084L78.4087 35.2026C79.9445 33.4405 81.4274 31.6256 82.8573 29.7577C84.2873 27.8899 85.7437 25.9692 87.2266 23.9956C87.8091 23.2203 88.4976 22.2511 89.292 21.0881C90.1394 19.9251 91.0927 18.5683 92.1519 17.0176H92.3108C92.6815 17.1938 93.1052 17.2819 93.5818 17.2819C94.694 17.2819 95.9121 16.9471 97.2361 16.2775L97.395 16.1718L97.3155 16.2775H97.2361C96.8654 16.7709 96.1769 17.6344 95.1706 18.8678C94.2173 20.0661 92.9728 21.652 91.4369 23.6255C95.7797 19.0441 99.4075 16.7533 102.32 16.7533C104.28 16.7533 105.26 17.37 105.26 18.6035C105.26 19.6255 104.598 21.1233 103.274 23.0969C104.386 22.0749 105.313 21.2467 106.054 20.6123C106.795 19.9427 107.352 19.4846 107.722 19.2379C109.947 17.652 111.933 16.859 113.68 16.859C115.958 16.859 117.096 17.5991 117.096 19.0793C117.096 20.1718 116.673 21.2819 115.825 22.4097C115.031 23.5022 114.078 24.6123 112.965 25.7401C111.853 26.8326 110.847 27.9251 109.947 29.0176C109.523 29.5815 109.126 30.1806 108.755 30.815C108.437 31.4141 108.278 31.9604 108.278 32.4537C108.278 32.9119 108.49 33.2996 108.914 33.6167C109.338 33.8987 110.053 34.0396 111.059 34.0396C111.8 34.0396 112.515 33.9515 113.204 33.7753C113.892 33.5639 114.501 33.3348 115.031 33.0881C116.461 32.348 117.679 31.4846 118.685 30.4978C119.691 29.511 120.565 28.5242 121.307 27.5374C122.048 26.5507 122.71 25.7225 123.293 25.0529C123.451 24.8767 123.61 24.8238 123.769 24.8943C123.928 24.9295 123.955 25.0352 123.849 25.2115C122.789 26.6916 121.624 28.2071 120.353 29.7577C119.082 31.3084 117.467 32.5418 115.507 33.4581C114.819 33.7753 114.051 34.0396 113.204 34.2511C112.409 34.4626 111.562 34.5683 110.662 34.5683C108.808 34.5683 107.457 34.304 106.61 33.7753C105.816 33.2115 105.418 32.489 105.418 31.6079C105.418 30.9736 105.63 30.1982 106.054 29.2819C106.372 28.6476 106.769 27.978 107.246 27.2731C107.775 26.533 108.437 25.7401 109.232 24.8943C112.039 21.793 113.442 19.7841 113.442 18.8678C113.442 18.2687 113.045 17.9692 112.25 17.9692C110.026 17.9692 106.795 20.2775 102.559 24.8943C101.235 26.304 99.9636 27.7841 98.7455 29.3348C97.5274 30.8502 96.3093 32.4361 95.0912 34.0925H94.9323C94.5616 34.022 94.2174 33.9692 93.8996 33.9339C93.5818 33.8987 93.2905 33.8811 93.0257 33.8811C91.4369 33.8811 90.4836 34.2511 90.1659 34.9912L89.9276 34.8855C91.9401 32.5595 93.5289 30.7093 94.694 29.3348C95.8591 27.9604 96.627 27.0617 96.9978 26.6388C100.387 22.3392 102.082 19.5903 102.082 18.3921C102.082 17.8634 101.791 17.5991 101.208 17.5991C99.0368 17.5991 95.7797 19.9604 91.4369 24.6828C88.5771 27.7489 86.0085 30.9031 83.7312 34.1454L83.5723 34.1982C82.8838 34.022 82.2748 33.9339 81.7452 33.9339C80.8449 33.9339 80.1034 34.163 79.5208 34.6211C78.9912 35.0793 78.6735 35.3084 78.5675 35.3084Z" stroke="black" strokeWidth="2"/>
          <path d="M141.395 34.1982C138.641 34.1982 137.264 32.9295 137.264 30.3921C137.264 29.4053 137.502 28.2775 137.979 27.0088C134.271 31.7665 130.591 34.1454 126.936 34.1454C125.189 34.1454 123.865 33.5639 122.964 32.4009C122.223 31.5198 121.852 30.4097 121.852 29.0705C121.852 27.978 122.09 26.8326 122.567 25.6344C123.467 23.5551 125.374 21.5991 128.287 19.7665C131.517 17.793 134.589 16.8062 137.502 16.8062C140.15 16.8062 141.474 17.8634 141.474 19.978C141.474 20.8943 141.183 21.9692 140.6 23.2026L145.446 16.859H145.684C145.843 17.0352 146.187 17.1233 146.717 17.1233C147.776 17.1233 149.127 16.7004 150.769 15.8546L150.927 15.9604L144.175 24.7357C141.474 28.2247 140.123 30.8678 140.123 32.6652C140.123 33.37 140.6 33.7225 141.553 33.7225C142.189 33.7225 142.957 33.5639 143.857 33.2467C144.758 32.9295 145.711 32.4009 146.717 31.6608C147.988 30.674 149.074 29.7401 149.974 28.859C150.927 27.9427 152.013 26.7093 153.231 25.1586C153.39 24.9824 153.549 24.8943 153.708 24.8943C154.026 24.8943 154.026 25.0705 153.708 25.4229C152.755 26.6211 151.722 27.8194 150.61 29.0176C149.55 30.1806 148.253 31.2731 146.717 32.2952C144.81 33.5639 143.036 34.1982 141.395 34.1982ZM127.254 33.7753C130.22 33.7753 134.033 30.9912 138.694 25.4229C140.176 23.6608 140.918 21.8811 140.918 20.0837C140.918 18.1806 139.991 17.2291 138.137 17.2291C136.125 17.2291 133.848 18.3392 131.306 20.5595C130.299 21.4758 129.425 22.3744 128.684 23.2555C127.996 24.1366 127.439 24.9824 127.016 25.793C125.904 27.9075 125.348 29.8106 125.348 31.5022C125.348 33.0176 125.983 33.7753 127.254 33.7753Z" stroke="black" strokeWidth="2"/>
          <path d="M157.992 34.674C152.643 34.674 149.969 32.9824 149.969 29.5991C149.969 28.6476 150.207 27.6256 150.683 26.533V26.5859C150.948 25.9515 151.451 25.3348 152.193 24.7357C153.093 23.9956 153.914 23.6255 154.656 23.6255C154.656 23.6255 154.735 23.6255 154.894 23.6255C155.053 23.6255 155.318 23.6608 155.688 23.7313L156.562 22.8326C157.304 22.0925 157.966 21.3524 158.548 20.6123C159.184 19.837 159.846 19.0793 160.534 18.3392C162.494 16.0837 163.977 14.8678 164.983 14.6916C165.301 14.6211 165.539 14.5859 165.698 14.5859C166.492 14.5859 166.889 14.7797 166.889 15.1674C166.889 15.6256 166.307 15.9075 165.142 16.0132C164.082 16.1189 163.42 16.207 163.156 16.2775C162.732 16.489 162.52 16.9471 162.52 17.652C162.52 18.3921 163.235 19.6432 164.665 21.4053C166.095 23.1322 166.81 24.6652 166.81 26.0044C166.81 26.3568 166.757 26.6916 166.651 27.0088C166.598 27.326 166.519 27.6608 166.413 28.0132C164.983 31.9956 161.196 33.9868 155.053 33.9868C156.271 34.163 157.383 34.2511 158.389 34.2511C160.243 34.2511 162.043 34.0396 163.791 33.6167C165.539 33.1586 167.154 32.5419 168.637 31.7665C170.173 30.9559 171.576 29.9868 172.847 28.859C174.171 27.696 175.31 26.4626 176.263 25.1586C176.422 24.9471 176.581 24.8414 176.74 24.8414C177.058 24.8414 177.084 25.0176 176.819 25.37C175.972 26.4273 175.072 27.4317 174.118 28.3833C173.218 29.2996 172.238 30.1278 171.179 30.8678C169.908 31.7137 168.187 32.5595 166.016 33.4053C163.844 34.2511 161.17 34.674 157.992 34.674ZM154.497 33.5639C157.198 33.5639 159.422 32.2071 161.17 29.4934C162.6 27.3789 163.315 25.2467 163.315 23.0969C163.315 22.815 163.235 22.4449 163.076 21.9868C162.97 21.4934 162.785 20.9119 162.52 20.2423C162.308 19.6079 162.149 19.0617 162.044 18.6035C161.938 18.1101 161.911 17.6872 161.964 17.3348C160.958 18.674 159.952 19.8899 158.945 20.9824C157.939 22.0749 156.986 23.0617 156.085 23.9427C156.35 24.2247 156.483 24.5066 156.483 24.7885C156.483 25.2819 156.191 25.8282 155.609 26.4273C155.238 26.7797 154.603 27.1145 153.702 27.4317C152.802 27.7489 152.166 28.0485 151.796 28.3304C151.213 28.8943 150.922 29.6344 150.922 30.5507C150.922 32.5595 152.113 33.5639 154.497 33.5639Z" stroke="black" strokeWidth="2"/>
        </svg>
      </div>
      <ul className='app__navbar-links'>
        {menuList.map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            {/* The following div is purely stetical, it only adds a dot on hover over every item*/}
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Lateral toggleable menu; only appears when screen is smaller than 900px */}
      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>

          {toggle && (
              <motion.div
                whileInView={{ x:[300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiX onClick={() => setToggle(false)}/>
                <ul className='app__navbar-links'>
                  {menuList.map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar