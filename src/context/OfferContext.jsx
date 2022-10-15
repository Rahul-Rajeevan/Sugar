import React,{ createContext, useState } from "react";

export const OfferContext = createContext()

export const OfferProvider = ({children})=>{
        
    const offerData = [
        {id:1,img:"https://d32baadbbpueqt.cloudfront.net/Promotion/71cbecc7-0d3d-42f1-8da3-d4f5d15a866a.jpg",coupon:"GJMMIL",copied:false},
        {id:2,img:"https://d32baadbbpueqt.cloudfront.net/Promotion/479caa48-4f60-42de-84a7-d23b6c244f82.jpg",coupon:"GJNRGG",copied:false},
        {id:3,img:"https://d32baadbbpueqt.cloudfront.net/Promotion/eb7f9151-3f06-452c-bb2d-7ebd336bf603.jpg",coupon:"GJ699",copied:false},
        {id:4,img:"https://d32baadbbpueqt.cloudfront.net/Promotion/4f57f7f3-1af0-4d93-bebf-05fabd36ba0a.jpg",coupon:"GJ1099",copied:false},
        {id:5,img:"https://d32baadbbpueqt.cloudfront.net/Promotion/11e748f5-43a4-43d8-8165-48bc86859441.jpg",coupon:"GJ1499",copied:false},
        {id:6,img:"https://d32baadbbpueqt.cloudfront.net/Promotion/16ec57e3-c0e0-4ac2-8eed-26dc9a2c5aa5.jpg",coupon:"GJ1999",copied:false},
        {id:7,img:"https://d32baadbbpueqt.cloudfront.net/Promotion/835392ea-a7f1-457c-ab6e-4bf22ca74594.jpg",coupon:"GJ2499",copied:false},
        {id:8,img:"https://d32baadbbpueqt.cloudfront.net/Promotion/50157311-8d25-4278-b20c-16392c635252.jpg",coupon:"SUGARNEW"}
        ]
    return<OfferContext.Provider value={{offerData}}>{children}</OfferContext.Provider>
}