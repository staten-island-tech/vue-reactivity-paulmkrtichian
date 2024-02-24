<template>
  <div>
    <DestCard
      v-for="bmwmodel in bmwmodels"
      :key="bmwmodel.model"
      :Destination="bmwmodel"
   />
  </div>
 
 </template>
 
 
 <script setup>
 import DestCard from "@/components/DestCard.vue";
 
 
 const bmwmodels = [
    {
        model: "X1 SUV",
        description: "The compact, yet intrepid, four-door SUV.",
        startingprice: "$40,500",
        img: "https://media.ed.edmunds-media.com/bmw/x1/2024/oem/2024_bmw_x1_4dr-suv_m35i_fq_oem_1_600.jpg"
    },
    {
        model: "X3 SUV",
        description: "A versatile midsize SUV with advanced features.",
        startingprice: "$45,000",
        img: "https://media.ed.edmunds-media.com/bmw/x3/2022/oem/2022_bmw_x3_4dr-suv_xdrive30i_fq_oem_1_1600.jpg"
    },
    {
        model: "X5 SUV",
        description: "Luxurious full-size SUV offering comfort and power.",
        startingprice: "$60,000",
        img: "https://media.ed.edmunds-media.com/bmw/x5/2024/oem/2024_bmw_x5_4dr-suv_xdrive50e_fq_oem_1_1600.jpg"
    },
    {
        model: "3 Series Sedan",
        description: "Elegant and sporty sedan with cutting-edge technology.",
        startingprice: "$39,000",
        img: "https://media.ed.edmunds-media.com/bmw/3-series/2023/oem/2023_bmw_3-series_sedan_330i-xdrive_fq_oem_1_1600.jpg"
    },
    {
        model: "5 Series Sedan",
        description: "Sophisticated and powerful executive sedan.",
        startingprice: "$54,000",
        img: "https://hips.hearstapps.com/hmg-prod/images/2021-bmw-540i-xdrive-370-edit-1608066218.jpg?crop=0.569xw:0.638xh;0.103xw,0.357xh&resize=768:*"
    },
    {
        model: "7 Series Sedan",
        description: "Flagship luxury sedan with top-tier features.",
        startingprice: "$84,000",
        img: "https://hips.hearstapps.com/hmg-prod/images/2023-bmw-760i-xdrive-101-1650340309.jpg?crop=0.793xw:0.892xh;0.153xw,0.108xh&resize=768:*"
    },
    {
        model: "i3 Electric",
        description: "Innovative electric car with a focus on sustainability.",
        startingprice: "$44,450",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/2018_BMW_i3_facelift_%281%29.jpg/1200px-2018_BMW_i3_facelift_%281%29.jpg"
    },
    {
        model: "iX Electric SUV",
        description: "Cutting-edge electric SUV with advanced technology.",
        startingprice: "$79,000",
        img: "https://car-images.bauersecure.com/wp-images/4418/bmw_ix_050.jpg"
    },
    {
        model: "M2 Coupe",
        description: "High-performance coupe designed for driving enthusiasts.",
        startingprice: "$58,900",
        img: "https://hips.hearstapps.com/hmg-prod/images/2023-bmw-m2-122-64bfdbf216fd2.jpg?crop=0.585xw:0.657xh;0.143xw,0.259xh&resize=768:*"
    },
    {
        model: "M5 Competition",
        description: "Ultimate performance sedan with a sporty edge.",
        startingprice: "$104,000",
        img: "https://static.wixstatic.com/media/57299e_8f64c24d56354c34a5c78edcfa62b39a~mv2.png/v1/fill/w_640,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/57299e_8f64c24d56354c34a5c78edcfa62b39a~mv2.png"
    },
    {
        model: "X2 SUV",
        description: "Sporty and stylish compact SUV with dynamic design.",
        startingprice: "$38,000",
        img: "https://hips.hearstapps.com/hmg-prod/images/2024-bmw-x2-exterior-101-65200b104cbb5.jpg?crop=0.671xw:0.753xh;0.137xw,0.247xh&resize=768:*"
    },
    {
        model: "X4 SUV",
        description: "Sleek and athletic midsize SUV blending performance and style.",
        startingprice: "$51,000",
        img: "https://www.bmwusa.com/content/dam/bmw/common/vehicles/2023/my24/x-models/x4/overview/mobile/BMW-MY24-X4-Overview-Performance-02-Mobile.jpg"
 
 
    },
    {
        model: "X6 SUV",
        description: "Bold and distinctive SUV with a coupe-like design.",
        startingprice: "$65,000",
        img: "https://www.bmwusa.com/content/dam/bmw/common/vehicles/2023/my24/x-models/x6/overview/mobile/BMW-MY24-X6-Overview-Form-01-Mobile.jpg"
    },
    {
        model: "4 Series Gran Coupe",
        description: "Four-door coupe offering a perfect blend of style and functionality.",
        startingprice: "$45,600",
        img: "https://media.ed.edmunds-media.com/bmw/4-series-gran-coupe/2023/oem/2023_bmw_4-series-gran-coupe_sedan_430i-xdrive_fq_oem_1_1600.jpg"
    },
    {
        model: "6 Series Gran Turismo",
        description: "Luxurious and spacious Gran Turismo with advanced features.",
        startingprice: "$70,000",
        img: "https://www.topgear.com/sites/default/files/cars-car/image/2017/10/leader_2.jpg"
    },
    {
        model: "Z4 Roadster",
        description: "Convertible roadster delivering an exhilarating driving experience.",
        startingprice: "$49,700",
        img: "https://hips.hearstapps.com/hmg-prod/images/2023-bmw-z4-119-1663892718.jpg"
    },
    {
        model: "8 Series Coupe",
        description: "A luxurious and powerful coupe setting new standards.",
        startingprice: "$87,800",
        img: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/1-bmw-8-series-coupe-2019-rt-hero-front.jpg?itok=R9VS13Zl"
    },
    {
        model: "i4 Electric",
        description: "Dynamic electric sedan with a focus on performance.",
        startingprice: "$55,400",
        img: "https://media.ed.edmunds-media.com/bmw/i4/2022/oem/2022_bmw_i4_sedan_edrive40_fq_oem_1_1600.jpg"
    },
    {
        model: "X7 SUV",
        description: "Spacious and opulent SUV with three rows of seating.",
        startingprice: "$74,900",
        img: "https://media.ed.edmunds-media.com/bmw/x7/2023/oem/2023_bmw_x7_4dr-suv_m60i_fq_oem_1_600.jpg"
    },
    {
        model: "M4 Coupe",
        description: "High-performance coupe with M-series DNA and thrilling capabilities.",
        startingprice: "$71,800",
        img: "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/13q4/543506/2015-bmw-m4-coupe-photos-and-info-news-car-and-driver-photo-559165-s-original.jpg?fill=2:1&resize=1200:*"
    },
  
 ];
  </script>
 
 
 <style scoped>
 h1 {
  color: red;
 }
 </style>
 
 