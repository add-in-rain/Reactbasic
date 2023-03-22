import React from 'react'

const Nav = () => {
  const loginList = ['매장찾기', '고객센터', '가입하기', '로그인']
  const menuList = ['New Realeases', 'Men', 'Women', 'Kids', 'Sale', 'SNKRS', '나이키 앱']

  return (
    <div>
      <div className='login'>
        <ul>
          {
            loginList.map((item, i)=> {
              return <li className='login-item' key={i}>{item}</li>
            })
          }
        </ul>
      </div>
      <div className='nav'>
        <img width={70} src="https://img.freepik.com/icones-gratis/nike_318-566094.jpg?w=360" alt="" />
        <ul className='gnb-list'>
        {
            menuList.map((item, i)=> {
              return <li className='gnb-item' key={i}>{item}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Nav
