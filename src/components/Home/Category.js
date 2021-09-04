import React from 'react'

export default function Category({categories}) {
    return (
        <div>
            
            <nav id="sidebar">
        
          <ul className="nav nav-pills  nav-sidefeatures">
            <div className="col-lg-41">
            {categories.map((category, i) => {
               return( <li key={category._id}>
                    <a  href="catlists.html"><span className={category.fa_icon} ></span> {category.name}</a>
                </li>)
            })}
            
            
         
        </div>
        </ul>
        
            </nav>
          
        
        </div>
    )
}
