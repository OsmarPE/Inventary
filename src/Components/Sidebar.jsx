import { NavLink } from 'react-router-dom'
function Sidebar() {
  return (
    <aside className='aside'>
        <div className="aside__item">
          <i className="ri-draggable"></i>
        </div>
        <ul className="aside__list">
          <li className="aside__list--item"><NavLink to={'/search'} className='aside__list--btn'><i className="ri-search-line"></i></NavLink></li>
          <li className="aside__list--item"><NavLink to={'/'} className='aside__list--btn'><i className="ri-layout-2-line"></i></NavLink></li>
          <li className="aside__list--item"><NavLink to={'/setting'} className='aside__list--btn'><i className="ri-settings-2-line"></i></NavLink></li>
        </ul>
      </aside>
  )
}

export default Sidebar