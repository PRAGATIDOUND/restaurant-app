import React from 'react'

const MenueCard = ({menueData}) => {
    console.log(menueData);
    return (
        <>
        <section className="main-card--cointainer">
        {menueData.map((curElem) =>{
            const {id,name,category,image,description}=curElem;
            return(
                <>
                
                 <div className="card-container" key={id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">{id}</span>
                        <span className="card-author subtle">{category}</span>
                        <h2 className="card-title">{name}</h2>
                        <span className="card-description subtle">
                        {description}
                        </span>
                        <div className="card-read">read</div>
                    </div>
                    <img src={image} alt="images" className="card-media" /> 
                    <span className="card-tag subtle">orer</span>
                </div>
            </div>    
            </>
            );
         })}
        </section>
        </>
    )
}

export default MenueCard
