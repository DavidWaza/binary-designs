import React from "react";

const TextBrand = () => {
    const styles= {
        marginTop:10,
        marginBottom:20,
        fontSize:40,
        textTransform: 'Uppercase',
        color:'black',
    }
    return(
        <div className="text-center textBrand" style={styles}>
            <h1>Our authentic Brands</h1>
        </div>
    )
}
export default TextBrand;