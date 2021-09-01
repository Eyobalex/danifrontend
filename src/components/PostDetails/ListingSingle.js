import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import { getPost, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';
import { Comment } from './Comment/Comment';
import { PostComment } from './Comment/PostComment';

const ListingSingle = () => {
  const { post, posts, isLoading, comments} = useSelector((state) =>{
    console.log(state);
    return state.posts
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none' }));
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);


  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
  return(
<div className="site-wrap">

<div className="site-mobile-menu">
  <div className="site-mobile-menu-header">
   <div className="site-mobile-menu-close mt-3">
    <span className="icon-close2 js-menu-toggle"></span>
   </div>
  </div>
 <div className="site-mobile-menu-body"></div>
</div>
<header className="site-navbar container py-0 " role="banner">
      


<div id="hom" className="row align-items-center">
<div className="col-6 col-xl-2">
<h1 className="mb-0 site-logo">
   <a href="home.js" className="text-white mb-0">
       <img src="images/img_1.jpg" style={{width:150}}/>
   </a></h1>
</div>

<div className="col-12 col-md-10 d-none d-xl-block">
<nav className="site-navigation position-relative text-right" role="navigation">

 <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
   
   <li><a href="about.js">About</a></li>
   <li className="mr-5"><a href="contact.js">Contact</a></li>

   <li className="ml-xl-3 login"><a href="login.js"><span className="border-left pl-xl-4"></span>Log In</a></li>

   <li><a href="register.js" className="cta"><span className="bg-primary text-white rounded">Register</span></a></li>
 </ul>
</nav>
</div>


<div className="d-inline-block d-xl-none ml-auto py-3 col-6 text-right" style={{position: "relative", top: 3}}>
<a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a>
</div>

</div>


</header>

<div className="overlay" style={{backgroundImage: "url(./images/listingp.jpeg)"}} dat-aos="fade" >

<div className="container">
 <div className="row align-items-center justify-content-center text-center">

   <div className="col-md-10" data-aos="fade-up" data-aos-delay="400">
     
     
     <h1 style={{color: "white", fontWeight: "bolder"}}>Login/Register</h1>
     
    

     
   </div>
 </div>
</div>
</div> 
      
        <div className="container">
        <div className="row">
                <div className="col-12">
                   
                </div>
            </div>

        <div className="row">
          <aside>
          
            <div className="signup">
              <div  className="d-block d-md-flex listing vertical" >
               <div style={{borderColor: "129, 121, 121", borderRadius:5, backgroundColor: "white" , height: 480 }}>
               
                   
                 
               
                 <img src={post.logo || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} style= {{width: 250}} alt="Image" className="img-fluid mb-3"/>
                 
               
                 <div className="product-information"> <h4 style={{fontWeight: "bolder"}}>Contact Info</h4><br/><i className="fa fa-location-arrow">  Addis Ababa,ET</i>                  <br/>
                   <a href="tell:011 116022"><i className="fa fa-phone" style={{paddingTop:4}}>  011 116022</i></a> <br/>
                   <a href="tell:091 120130"><i className="fa fa-phone" style={{paddingTop:4}}>  091 120130</i></a> 
                   <br/>
             <div className="grand_social">
             <ul className="social-icons">
                 <li>
                     <a target="_blank" href="#">
                         <i className="fa fa-facebook"></i>
                     </a>
                 </li>
                     <li>
                         <a target="_blank" href="#">
                             <i className="fa fa-twitter"> </i>
                         </a>
                     </li>
                 <li>
                     <a target="_blank" href="#">
                         <i className="fa fa-google-plus">              </i>
                     </a>
                 </li>
                     <li >
                         <a  target="_blank" href="#">
                             <i className="fa fa-pinterest">            </i>
                         </a>
                     </li>
                 <li>
                     <a target="_blank" href="#">
                         <i className="fa fa-linkedin">              </i>
                     </a>
                 </li>
                     <li>
                         <a target="_blank" href="#">
                             <i className="fa fa-dribbble">             </i>
                         </a>
                     </li>
             </ul>
             
             
             
             </div></div>
             
               </div>
             
            </div>
          </div>
         
          </aside>
          
          <div className="section1">
            
            <div id="ratnav" style={{zIndex: 100 }}  className="signup">
              <div  className="d-block d-md-flex listing vertical">
                <div  style={{marginLeft: 15, backgroundColor: "white"}}>
                  
                  
                  <a style={{float: "right", marginRight: 50, marginTop: 25}} href="#" className="bookmark"><span style={{color: "red"}} className="icon-heart"></span></a>
                  <h3 contenteditable="true" style={{paddingTop: 25 }}><a href="listings-single.html">DES General Trading PLC</a></h3>
                  
                  <p style={{paddingBottom: 5}} className="mb-0">
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    
                    <span className="review">(3 Reviews)</span>
                  </p>
                  
                     <ul className="topside">
                    
                    
                      <li><a href="#"><span className="fa fa-map-marker"></span> Get Direction</a></li> 
                      <li><a href="#"><span className="fa fa-phone" ></span> Call now</a></li> 
                      <li><a href="#"><span className="fa fa-envelope" ></span> Sent-email</a></li> 
                      <li>  <a href="#"><span className="fa fa-share" ></span>Share</a></li> 
                      <li>  <a href="#" data-target="#mymodel" data-toggle="modal"><span className="fa fa-comments" ></span>Leave a review</a></li> 
                  </ul>
   
                 
                </div>
                </div>
                
            </div> 
            <div  className="modal" id="mymodel">
              <div className="modal-dialog">
                  <div className="modal-content">
                  <div className="modal-header">
                  <h3>Insert Review</h3>
                  <button type="button" className="close" data-dismiss="modal"> &times;</button>
                  </div>
                   
                  <div className="modal-body">

                    <PostComment postId={id} />

                  </div>


                  </div>

              </div>
           </div>

            <div className="d-block d-md-flex listing vertical">
            <div  style={{marginLeft: 15, backgroundColor: "white"}}>
              <h4 ><span className="fa fa-bars"></span> Business Detail </h4>
              <p style={{fontSize: 15, fontFamily: "Cambria, Cochin, Georgia, Times, serif"}}>
              
                DES General Trading Private Limited Company is manufacturer of melamine, steel wool, and aluminum utensils in Ethiopia. We also import plastic, household materials, electronic materials, Food staff, Plastic Items and soon and export various agricultural products such as white bean, green bean, coffee, spices and so on. Established in 1997, Des General Trading has 15 million investment capital, 20 million birr in total asset and 138 million birr annual sales. DES is an ever expanding company which is in the process of diversifying its scope of business 
                from import and manufacturing to export and service sectors. Currently, it is planning to establish one of the biggest soap factory in the country to add one more to the existing 3 manufacturing plants. Our Suppliers are internationally renowned companies from Europe, Asia & Far East countries, including, FORMUSA Int’l FLC, Thai Plastic Partner, Seascop Exports and M & S Steel wires. The company has secured successful business.
              </p>


            </div>
            </div>
            <div  className="d-block d-md-flex listing vertical" >
              <div className="row">
              
                <div className="col-lg-12">
                <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5089.027915764806!2d38.75787871067382!3d8.983121094747325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84402c5b6d99%3A0x1ff628bbdc473237!2zR290ZXJhIFNxdWFyZSDhjI7hibDhiKsg4Yib4Yiz4YiI4Yyr!5e0!3m2!1sen!2set!4v1625149301212!5m2!1sen!2set" width="100" height="300" style={{border:0}} allowfullscreen=""></iframe></p>
              </div>
            
              </div>
            </div>
            <h4 style={{textAlign: "center"}} >DES Products</h4>
                  
            {post.comments.map( comment => {
              console.log(comment);
              return (
                <div  className="row">
                  <Comment comment={comment} />
              </div>
            )}
            )}
              
           {/* <h1>coments: {JSON.stringify(comments)}</h1> */}
          </div>
          
          <section className="d-none d-md-block">

            
            <div className="d-block d-md-flex listing vertical">
        
              <h2 style={{fontWeight: "bolder", textAlign: "center"}}>Directories</h2>
            
          
         
              <nav id="sidebar">
          
            <ul className="nav nav-pills  nav-sidefeatures">
              <div className="col-lg-41">
            <li>
              <a  href="catlists.html"><span className="fa fa-fire" ></span> Agriculture</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-picture-o" ></span> Amusement Parks</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-bars"></span> Appartments</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-cut" ></span> Architecture</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-money" ></span>Banking and Finance</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-music" ></span> Bars</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-book" ></span> Books & Mags</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-glass" ></span>Clubs</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-road" ></span> Commercial Places</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-desktop"></span> Computer and Internet</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-exclamation-triangle" ></span> Construction</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-book" ></span> Education</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-music" ></span>  Entertaiment</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-camera" ></span> Fashion</a>
            </li>
            <li>
              <a href="#"><span className="fa fa-plus-square" ></span> Health & Medical</a>
            </li>
            
          </div>
          </ul>
          
              </nav>
            
            </div>
          
    
          </section>

      </div>

     
     
        <div style={{marginBottom: 50}} className="container">
          
          
          <div className="row">
            <div className="col-12">
              <h3 className="h3 mb-3 text-black">Related Listings</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12  block-13">
              <div className="owl-carousel nonloop-block-13">
                
                <div className="d-block d-md-flex listing vertical">
                  <div style={{borderColor: "29, 28, 28", borderRadius:5, backgroundColor: "white"}}>
            
                    <img src="images/72.jpg" className="img-thumbnail rounded-circle" style={{marginLeft: 50, marginLeft: 50, width: 120, height: 120}}/>
                    
                  
                  
                  <div className="text p-4" >
                    <h3 className="h5 text-black" style={{fontWeight: "bold"}}><a href="listings-single.html">DES General Trading PLC</a></h3>
                    <span style={{fontWeight: "bolder", fontSize: "small"}} className="category ">Listed in <a href="#"> Agriculture</a></span>
                    <br/>
                    <p className="mb-0" style={{fontSize: "small, fontFamily: Arial, Helvetica, sansSerif"}}>DES General Trading Private Limited Company ....</p>
                    <br/>
                    <div style={{fontSize: "medium"}}  className="row" >
                    <div className="fa fa-location-arrow " style={{marginRight: 15}}> Addis Ababa, ET</div> <div className="fa fa-phone" style={{marginRight: 15}}>0925001221</div> <a href="#" className="fa fa-globe">Vist website</a>
                    </div> 
                  
                  
                  </div>
                  <br/>
                  
                  </div>
                </div>
  
               
  
                <div className="d-block d-md-flex listing vertical">
                  <div style={{borderColor: "29, 28, 28", borderRadius:5 ,backgroundColor: "white"}} >
            
                    <img src="images/72.jpg" className="img-thumbnail rounded-circle" style={{marginLeft: 60, width: 120, height: 120 }}/>
                    
                  
                  
                  <div className="text p-4" >
                    <h3 className="h5 text-black" style={{fontWeight: "bold"}}><a href="listings-single.html">DES General Trading PLC</a></h3>
                    <span style={{fontWeight: "bolder", fontSize: "small"}} className="category ">Listed in <a href="#"> Agriculture</a></span>
                    <br/>
                    <p className="mb-0" style={{fontSize: "small, fontFamily: Arial, Helvetica, sansSerif"}} >DES General Trading Private Limited Company ....</p>
                    <br/>
                    <div style={{fontSize: "medium"}} className="row" >
                      <div className="fa fa-location-arrow " style={{marginRight: 15}}> Addis Ababa, ET</div> <div className="fa fa-phone" style={{marginRight: 15}}>0925001221</div> <a href="#" className="fa fa-globe">Vist website</a>
                    </div> 
                  
                  
                  </div>
                  <br/>
                  
                  </div>
                </div>
  
                <div className="d-block d-md-flex listing vertical">
                  <div style={{borderColor: "29, 28, 28", borderRadius:5, backgroundColor: "white"}} >
            
                    <img src="images/72.jpg" className="img-thumbnail rounded-circle" style={{ marginLeft: 60, width: 120, height: 120}}/>
                    
                  
                  
                  <div className="text p-4" >
                    <h3 className="h5 text-black" style={{fontWeight: "bold"}}><a href="listings-single.html">DES General Trading PLC</a></h3>
                    <span style={{fontWeight: "bolder, fontSize: small"}} className="category ">Listed in <a href="#"> Agriculture</a></span>
                    <br/>
                    <p className="mb-0" style={{fontSize: "small, fontFamily: Arial, Helvetica, sansSerif"}} >DES General Trading Private Limited Company ....</p>
                    <br/>
                    <div style={{fontSize: "medium"}}  className="row" >
                      <div className="fa fa-location-arrow " style={{marginRight: 15}}> Addis Ababa, ET</div> <div className="fa fa-phone" style={{marginRight: 15}}>0925001221</div> <a href="#" className="fa fa-globe">Vist website</a>
                    </div> 
                  
                  
                  </div>
                  <br/>
                  
                  </div>
                </div>
  
                <div className="d-block d-md-flex listing vertical">
                  <div style={{borderColor: "29, 28, 28", borderRadius:5, backgroundColor: "white"}} >
            
                    <img src="images/72.jpg" className="img-thumbnail rounded-circle" style={{ marginLeft: 60, width: 120, height: 120}}/>
                    
                  
                  
                  <div className="text p-4" >
                    <h3 className="h5 text-black" style={{fontWeight: "bold"}}><a href="listings-single.html">DES General Trading PLC</a></h3>
                    <span style={{fontWeight: "bolder", fontSize: "small"}} className="category ">Listed in <a href="#"> Agriculture</a></span>
                    <br/>
                    <p className="mb-0" style={{fontSize: "small, fontFamily: Arial, Helvetica, sansSerif"}} >DES General Trading Private Limited Company ....</p>
                    <br/>
                    <div style={{fontSize: "medium"}} className="row" >
                      <div className="fa fa-location-arrow "style={{marginRight: 15}}> Addis Ababa, ET</div> <div className="fa fa-phone" style={{marginRight: 15}}>0925001221</div> <a href="#" className="fa fa-globe">Vist website</a>
                    </div> 
                  
                  
                  </div>
                  <br/>
                  
                  </div>
                </div>
  
                <div className="d-block d-md-flex listing vertical">
                  <div style={{borderColor: "29, 28, 28", borderRadius:5, backgroundColor: "white"}} >
            
                    <img src="images/72.jpg" className="img-thumbnail rounded-circle" style={{marginLeft: 60, width: 120, height: 120  }}/>
                    
                  
                  
                  <div className="text p-4" >
                    <h3 className="h5 text-black" style={{fontWeight: "bold"}}><a href="listings-single.html">DES General Trading PLC</a></h3>
                    <span style={{fontWeight: "bolder", fontSize: "small"}} className="category ">Listed in <a href="#"> Agriculture</a></span>
                    <br/>
                    <p className="mb-0" style={{fontSize: "small", fontFamily: "Arial, Helvetica, sansSerif"}} >DES General Trading Private Limited Company ....</p>
                    <br/>
                    <div style={{fontSize: "medium"}}  className="row" >
                      <div className="fa fa-location-arrow "style={{marginRight: 15}}> Addis Ababa, ET</div> <div className="fa fa-phone" style={{marginRight: 15}}>0925001221</div> <a href="#" className="fa fa-globe">Vist website</a>
                    </div> 
                  
                  
                  </div>
                  <br/>
                  
                  </div>
                </div>
  
              
                
            </div>
  
  
          </div>
        </div>
      </div>
  
      </div>
      
      
      <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-100">
            <div className="row">
              <div className="col-md-6">
                <h2 className="footer-heading mb-4">About</h2>
                <p>Hi, We're Ethio Business Online Business Directoy,We help people discover your business.</p>
              </div>

              <div className="col-md-3">
                <h2 className="footer-heading mb-3">Navigations</h2>
                <ul className="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Business Listing</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h2 className="footer-heading mb-3">Follow Us</h2>
                <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
              </div>
            </div>
          </div>

        </div>
        <div className="row pt-5  text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
            <p>

             All rights reserved |&copy; Ethio BUSINESS ONLINE BUSINESS DIRECTORY.

            </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
        </div>
    )
       }

    export default ListingSingle;

