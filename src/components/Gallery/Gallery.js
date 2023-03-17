import {db} from "../../Firebase-config";
import {collection, getDocs} from "firebase/firestore";


import "./Gallery.css"
import { useEffect, useState } from "react";
export const Gallery = () =>{
    const [ImageList, setImageList] = useState([]);
    const PhotoCollectionRef = collection(db, "Photos_Gallery");
    useEffect(() => {
        
    const getImageList = async() =>{
        // Read the Data from database
        //Set the imageList
        try{
            
        const data  = await getDocs( PhotoCollectionRef ); 
        const filteredData = data.docs.map((doc) => ({...doc.data(), url: doc.id}));
        console.log(filteredData);
        setImageList(filteredData);
        } catch(err){
            console.log(err);
        }
    }
    getImageList();
}, []);
    return(
       
        <div id= "portfolio" className="">
            <div className="gallery-container gallery-padding">

            <div className = "portfolio-content">
                    <div className = "title">
                        <h2>my last works</h2>
                        
                    </div>
                    
                    <div className = "portfolio-grid grid">
                        {/* <a href={v2}><div><img src = {v2} /></div></a>
                        <a href={verticalImage}><div><img src = {verticalImage} /></div></a>
                        <a href={v3}> <div><img src = {v3} /></div></a>
                        <a href= {horizantalImage} ><div><img src = {horizantalImage} /></div></a>
                        <a href={h2}><div><img src = {h2}/></div></a>
                        <a href={h3}><div><img src = {h3}/></div></a>
                        <a href={h4}><div><img src = {h4}/></div></a>
                        <a href={h5}><div><img src = {h5}/></div></a>
                        <a href={h6}><div><img src = {h6}/></div></a> */}
                        
                            {ImageList.map((image) =>(
                                <a href={image.Url}><div><img src = {image.Url} /></div></a>
                            ))}
                        
                    </div>

            </div>

            </div>
        </div>
        
    );
}

// export const Vertical = () =>{
//     return(
//         <div className = "vertical">
//             <img src={verticalImage}></img>
//         </div>
//     );
// }


