import styled from 'styled-components'

const Wrapper = styled.main`

.page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -2rem;
}
h1 {
    font-weight: 700;
    span {
        color: var(--primary-500);
    }
    p {
        color: var(--grey-600);
    }
}
nav {
    
    h4 {
        margin-top: 20px;
        font-size: 2.5rem;
        color: var(--primary-500);
    }
    .Logo {
            height: 35px;
    }

}
.main-img {
    display: none;
}
@media (min-width: 990px)  {
    .page {
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
    }
    .main-img {
        display: block;
    }
   
}
@media (max-width: 700px) {
     .footerNav ul{
        flex-direction: column;
    }
    .footerNav ul li{
        width:100%;
        text-align: center;
        margin:10px;
    }
}


        * {
        box-sizing: border-box;
        }
        #Container {
            display: flex;
            flex-wrap: wrap;
            
        }
        #canvas {
            width: 100%;
        }
        .Navigation {
            flex-basis: 50%;
            flex-grow: 0;
            flex-shrink: 1;
        }
        .Content {
            flex-basis: 30%;
            flex-grow: 1;
            flex-shrink: 0;
            margin-top:20;
        }
        
        .trd1 {
            flex-basis: 50%;
            flex-grow: 1;
            flex-shrink: 0;
            margin-top:20;

        }
         .trd2 {
            flex-basis: 40%;
            flex-grow: 1;
            flex-shrink: 0;
            margin-top:20;
        }
        .Header {
             display: flex;
             flex-wrap: wrap;
            flex-basis: 100%;
            flex-grow: 1;
            flex-shrink: 0;
            color: black;
            position: sticky;
            top: 0;
            background-color: #f5f5f5;
            border-bottom:2px Solid #ccc;
            justify-content: left;
            padding-top:15px;
            height: 65px;
        }
        .Logoo {
            flex-basis:10%;
            flex-grow:0;
            flex-shrink:1; 
            margin-top:8.3px;   
        }

        .icon {
            flex-basis:5%;
            flex-grow:0;
            flex-shrink:1;
            padding: 15px 20px 6px 6px;
        }

        .search {
            flex-basis: 5%;
            flex-grow: 1;
            flex-shrink: 1;   
              
        }
         .button {
             flex-basis: 10%;
            flex-grow: 1;
            flex-shrink: 0;
            margin-top:10px;
             background-color: transparent;
            color: black;
            border: none;
           
        }
        
        button:hover {
            background-color: #ccc;
            color: white;
            transition: background-color .2s color 0.5s;

        } 
         .About {
             flex-basis: 10%;
            flex-grow: 1;
            flex-shrink: 1;
            margin-top:8.3px;
            margin-left:40px;
        }
         .Contacts {
            flex-basis: 10%;
            flex-grow: 1;
            flex-shrink: 1;
            margin-top:8.3px;
            margin-left:40px;
        }
        .form {
             width: 50%;
             height: 40px;
             background: rgba(255,255,255,0.2);
             display: flex;
             align-items: center;
             border-radius: 40px;
             padding: 4px 4px ;
             margin-top:0;
        }
        .search input {
            background-color: transparent ;
            flex: 1;
            outline: transparent;
            border: transparent;
            padding: 24px 1px;
            font-size: 15px;
            color: black
        }
        .info {
            margin-top:20px;
        }
        .HeaderSecond {
            flex-basis: 100%;
            flex-grow: 1;
            flex-shrink: 0;
          
            padding: 20px;
             
            
        }
        .Headerthird {
            display: flex;
            flex-wrap: wrap;
            flex-basis: 100%;
            flex-grow: 1;
            flex-shrink: 0;
            
            
            padding: 20px;
           
            
        }
        .footer {
             flex-basis: 100%;
            flex-grow: 1;
            flex-shrink: 0;
            padding: 70px 30px 20px;
            color: #a7a7aa!important;
        }
        footer {
            background-color: #22242b;
            width: 100%;
            position: relative;
            color: #a7a7aa!important;
        }
        .socialIcons {
            display: flex;
            justify-content: center;
        }
        .socialIcons svg{
            
            text-decoration: none;
            padding:10px;
            background-color: white;
            margin:10px;
            border-radius: 50%;  
        }
        .socialIcons svg:hover{
             background-color: black;
             transition: 0.5s;
            
        }
        .footerNav {
         margin: 30px 0;
        }
        .footerNav ul {
            display: flex;
            justify-content: center;
        }
        .footerNav ul li a {
            color: #a7a7aa!important;
            margin: 20px;
            text-decoration: none;
            font-size:1.3rem;
            opacity: 0.7;
            transition: 0.5s;
        }
        .footerNav ul li a:hover {
           opacity: 1;
             
        }
        .footerBottom {
         background-color :#000 ;
         padding: 10px 10px 10px 260px;
         text-align: center;
        }
        .footerBottom p{
            color:white ;
        }

`
export default Wrapper