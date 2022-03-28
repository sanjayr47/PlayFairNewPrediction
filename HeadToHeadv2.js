import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { TextInput, TextField, Input, ScrollView } from 'react-native';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

import 'materialize-css/dist/css/materialize.min.css'
import './HeadToHead.css';

// with ES Modules (if using client-side JS, like React)
import * as firebase from "@firebase/app";
import '@firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBiQ0KxNabzlbWdFKDj8tc87-uGfyVCVsQ",
    authDomain: "playfairbets.firebaseapp.com",
    projectId: "playfairbets",
    storageBucket: "playfairbets.appspot.com",
    messagingSenderId: "986386688697",
    appId: "1:986386688697:web:5cf47341654b5868e74968",
    measurementId: "G-NS4EKXZBDL"
  };
// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);
const db = firebase.default.firestore();
const betsRf = db.collection("bets");
export default class CustomText extends React.Component { 

    render() { 
        

        var upArrowImgURL = "https://i.ibb.co/dMydHWS/Screenshot-2022-03-05-at-8-37-04-AM.png"
        var downArrowImgURL = "https://i.ibb.co/SJhMTZR/2022-03-05-0g4-Kleki-1.png"
        
        const queryString = window.location.search;
        console.log(queryString)
        const urlParams = new URLSearchParams(queryString);

        var headersCalled = false;
        document.addEventListener('DOMContentLoaded', function () {
            var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        
        if (dd < 10) {
           dd = '0' + dd;
        }
        
        if (mm < 10) {
           mm = '0' + mm;
        } 
            
        today = yyyy + '-' + mm + '-' + dd;
        document.getElementById("choose_date").setAttribute("min", today)
        document.getElementById("choose_date").value = today

        var date_elems = document.querySelectorAll('.datepicker');
        var instances_elems = M.Datepicker.init(date_elems, "");
        
        //date_elems.setDate(new Date(yyyy, mm, dd));
        


          }, false);
          function reset_input(){
            //  alert(document.getElementById("choose_date").value);
          }
        function submit(){


            var direction = ""
            var image_url = document.getElementById("when_card_arrow_img").src
            if(image_url == upArrowImgURL){
              
                direction = "UP"
            }
            else{
               
                direction = "DOWN"
            }

            var date_length = String(document.getElementById("date_prediction_text").innerHTML)


            if (date_length.includes("<")){
                date_length=date_length.split("<")[0].replace("&nbsp;","_")
            }
            else{
                date_length=date_length.replace(" ","_")
            }



            
            var newPost = {
                currency: "ETH",
                LENGTH: date_length,
                direction: direction
              };

              
            betsRf.doc(urlParams.get("predictionId")).set({other_user_date: date_length, other_user_direction: direction}, { merge: true });
            //betsRf.add(newPost);
            document.getElementById("submit_header").innerHTML = "Submitted"
            document.getElementById("yes_button").style.display = "none"
            document.getElementById("no_button").innerHTML = "OK"
            //document.getElementById("make_prediction_header").innerHTML = ""
            document.getElementById("prediction_card").style.display = "none"
            document.getElementById("submit_btn").style.display = "none"

             
            document.getElementById("prediction_card").style.display="block"
            document.getElementById("prediction_text").innerHTML = "This challenge has already been accepted"
            
        }
        var universalStartingDate = ""
        function check_headers(){
           
                var elems = document.querySelectorAll('.modal');
                var instances = M.Modal.init(elems, "");
                
               
            if(!headersCalled){
                headersCalled=true;
                var date = urlParams.get("date")
                var name = urlParams.get("name")
                var direction = urlParams.get("direction")
                var currDate = urlParams.get("currDate")
                var currency = urlParams.get("currency")
                var startingDate = urlParams.get("starting_date")

                
                
                
                

                
                if(direction !== null && name !== null && date !== null && currDate !== null && currency !== null && startingDate !== null){

                    
                    
                    

                    
                    betsRf.doc(String(urlParams.get("predictionId"))).get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            if(doc.data().other_user_direction != undefined){
                                
                                document.getElementById("prediction_card").style.display="block"
                                document.getElementById("prediction_text").innerHTML = "This challenge has already been accepted"
                            }
                            else{
                                
                                //all parameters exist
                    document.getElementById("prediction_card").style.display="block"
                    document.getElementById("submit_prediction_row").style.display="block"
                    var prediction_text = "Starting from "+startingDate+", "+currency+" will go "+direction+" in "+date.replace("_"," ") 
                    document.getElementById("prediction_text").innerHTML="You've been invited to a prediction challenge <br/><br/> Their Prediction: <br/><br/> "  +prediction_text
                    document.getElementById("their_prediction").innerHTML="Their Prediction: "  +prediction_text
                    document.getElementById("your_prediction").innerHTML = "Your prediction: Starting from "+startingDate+ ", ETH will go up in 1 day"
                    universalStartingDate = startingDate;
                            }
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });




                }
                else{
                    // one/none of the parameters doesn't exist
                    



                }
                
            }
            
        }
        function switch_direction(){
            var direction = ""
            var image_url = document.getElementById("when_card_arrow_img").src
            if(image_url == upArrowImgURL){
                document.getElementById("when_card_arrow_img").src = String(downArrowImgURL)
                document.getElementById("graph_arrow").src=String(downArrowImgURL)
                document.getElementById("direction_text").innerHTML="DOWN"
                direction = "down"
            }
            else{
                document.getElementById("when_card_arrow_img").src = String(upArrowImgURL)
                document.getElementById("graph_arrow").src=String(upArrowImgURL)
                document.getElementById("direction_text").innerHTML="UP"
                direction = "up"
            }

            var date_length = String(document.getElementById("date_prediction_text").innerHTML)
            document.getElementById("your_prediction").innerHTML = "Your Prediction: ETH will go "+ direction + " in "+ date_length
            if(universalStartingDate != ""){
                document.getElementById("your_prediction").innerHTML = "Your Prediction: Starting from "+ universalStartingDate +", ETH will go "+ direction + " in "+ date_length
            }
            
        }

        function toggle_date_selector(){
            
            document.getElementById("date_time").style.display="block"
            if (universalStartingDate != ""){
                document.getElementById("starting_date_text").style.display = "none"
                document.getElementById("starting_date_selector").style.display = "none"
            }
        }

        function choose_date(e){
            for(var i=0; i< document.getElementsByClassName("choose_date_btn").length; i++){
                var id= String(document.getElementsByClassName("choose_date_btn")[i].id)
                document.getElementById(id).classList.remove("btn")
                document.getElementById(id).classList.add("btn-flat")
                document.getElementById(id).style.color="gray"
              }
              document.getElementById("date_prediction_text").innerHTML= String(document.getElementById(String(e)).innerHTML)

              document.getElementById(String(e)).classList.remove("btn-flat")
              document.getElementById(String(e)).classList.add("btn")
              document.getElementById(String(e)).style.color="white"

              var direction = ""
              
              var image_url = document.getElementById("when_card_arrow_img").src
                if(image_url == upArrowImgURL){
                    direction = "up"
                }
                else{
                    direction = "down"
                }

                var date_length = String(document.getElementById("date_prediction_text").innerHTML)


                document.getElementById("your_prediction").innerHTML = "Your Prediction: ETH will go "+ direction + " in "+ date_length
                if(universalStartingDate != ""){
                    document.getElementById("your_prediction").innerHTML = "Your Prediction: Starting from,"+ universalStartingDate +" ETH will go "+ direction + " in "+ date_length
                }

        }
        var prediction_id_chosen = "";
        function share_prediction(){
            if(prediction_id_chosen == ""){
                var domain = String(window.location.href.split("/")[2])
            
                var direction = ""
                  
                  var image_url = document.getElementById("when_card_arrow_img").src
                    if(image_url == upArrowImgURL){
                        direction = "up"
                    }
                    else{
                        direction = "down"
                    }
    
                var date_length = String(document.getElementById("date_prediction_text").innerHTML)
                if (date_length.includes("<")){
                    date_length=date_length.split("<")[0].replace("&nbsp;","_")
                }
                else{
                    date_length=date_length.replace(" ","_")
                }
                //.replace(" ","_")

                var chosenDate = String(document.getElementById("choose_date").value);
                var newPost = {
                    currency: "ETH",
                    LENGTH: date_length,
                    starting_date: chosenDate, 
                    direction: direction
                  };
                  
                  
    
                    betsRf.add(newPost).then(function(docRef) {
                        console.log("Document written with ID: ", docRef.id);
                        var today = new Date();
                        var nextweek = today.getMonth()+ "-"+today.getDate()+"-"+today.getFullYear()
    
                        var middle = "?userId=mX93ijawi%26predictionId="+docRef.id+"%26name=temp%26starting_date="+chosenDate+"%26direction="
    
                        prediction_id_chosen = 'iMessage://&body= Hey, I challenge you to a prediction challenge on the Playfair app! I believe ETH will go '+direction+" in "+date_length.replace("_", " ")+" \n "+domain+"/"+middle+direction+"%26date="+date_length+"%26currDate="+nextweek+"%26currency="+"ETH";
                        location.href = prediction_id_chosen
                        
                        
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    });;
    
    
            }else {
                location.href = prediction_id_chosen
            }

           
           

        }
      return (

       <View style={styles.container}>
           <ScrollView>
            <center>
                <br />
                <div className="equity-filter-bg" onLoad={() => check_headers()}>

                                
                    
                    <div className="user-prediction-card" style={{display: 'none'}}>

                        <div className="col s12 m8 offset-m2 l6 offset-l3"  style={{marginBottom: 5}}>
                            <div style={{margin: 20, marginTop: 0, paddingTop: 0, marginBottom: 5, maxWidth:400, padding:10, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    <div className="col s3 my-container">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHC-MZMN2DF3w/profile-displayphoto-shrink_400_400/0/1573566085060?e=1651104000&v=beta&t=dEnyZYJNBderWO6af7QbpV6F0NYIcPptky8ASaJpsDI" alt="" className="circle responsive-img"/>
                                        <div id="banner">4th</div>
                                    </div>

                                    <div className="col s5" style={{marginLeft: 10}}>
                              
                                        <div className="row valign-wrapper" style={{marginBottom: 0}}>
                                            <b>James David</b>
                                        </div>

                                        <div className="row valign-wrapper" style={{color: 'gray', marginBottom: 1, fontSize: 10}}>
                                            👶 1K+ PLAY
                                        </div>
                                        
                                    </div>

                                    <div className="col s4" style={{paddingLeft: 5}}>

                                    </div>
                                    

                                    <div className="col s2">

                                        
                                    </div>

                                    <div className="col s2">

                              
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

     

                    <div className="user-prediction-card" style={{marginLeft: 13, marginTop: 5, display: 'none'}}>

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div style={{margin: 20, marginTop: 5, marginBottom: 5, maxWidth:400, padding:0, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    <div className="col s5 my-container">
                                    <div className="row valign-wrapper" style={{marginBottom: 0}}>
                                            <b>Leaders</b>
                                        </div>
                                    </div>

                                    <div className="col s5" style={{marginLeft: 10}}>
                              
                                        
                                        
                                    </div>

                                    <div className="col s4" style={{paddingLeft: 5}}>

                                    </div>
                                    

                                    <div className="col s2">

                                        
                                    </div>

                                    <div className="col s2">

                              
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="user-prediction-card" style={{marginLeft: 13, marginTop: 5, display: 'none'}}>

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div style={{margin: 20, marginTop: 5, marginLeft: 5,  maxWidth:400, padding:10, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                <ScrollView
                                    horizontal={true}>
                                <img src="https://www.kindpng.com/picc/m/557-5575215_2020-profile-circle-hd-png-download.png" 
                                    alt="" 
                                    style={{width: 67, height: 67, border: 'solid', borderWidth: 2, borderColor: 'green'}}
                                    className="circle responsive-img"/>

                                <img src="data:image/jpeg;base64,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" 
                                    alt="" 
                                    style={{width: 67, height: 67, marginLeft: 10, border: 'solid', borderWidth: 2, borderColor: 'green'}}
                                    className="circle responsive-img"/>

                                <img src="https://png.pngitem.com/pimgs/s/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png" 
                                    alt="" 
                                    style={{width: 67, height: 67, marginLeft: 10, border: 'solid', borderWidth: 2, borderColor: 'green'}}
                                    className="circle responsive-img"/>

                                <img src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg" 
                                    alt="" 
                                    style={{width: 67, height: 67, marginLeft: 10, border: 'solid', borderWidth: 2, borderColor: 'green'}}
                                    className="circle responsive-img"/>

                                <img src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg" 
                                    alt="" 
                                    style={{width: 67, height: 67, marginLeft: 10, border: 'solid', borderWidth: 2, borderColor: 'green'}}
                                    className="circle responsive-img"/>

                                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHC-MZMN2DF3w/profile-displayphoto-shrink_400_400/0/1573566085060?e=1651104000&v=beta&t=dEnyZYJNBderWO6af7QbpV6F0NYIcPptky8ASaJpsDI" 
                                    alt="" 
                                    style={{width: 67, height: 67, marginLeft: 10, border: 'solid', borderWidth: 2, borderColor: 'green'}}
                                    className="circle responsive-img"/>
                                    
                                </ScrollView>
                                    
                                </div>
                            </div>
                        </div>

                    </div>


                







                    {/* Prediction Card */}
                    <div className="user-prediction-card" id="prediction_card" style={{display: 'none'}}>
                    
                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="card-panel lighten-5 z-depth-1" style={{margin: 20, maxWidth:400, padding:5, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    
                                        <h6 id="prediction_text" style={{marginLeft: 'auto', marginRight: 'auto'}}>Sanjay's Prediction: ETH will go up in 1 Week</h6>
                                        
                                    
                                        
                                    
                                        
                                    </div>

                                    

                                   
                                </div>
                            </div>
                            
                            
                            
                        </div>



                    
                    {/* etheruem header */}
                    <div className="user-prediction-card">
                    <hr></hr>
                            <h5 id="make_prediction_header">Make your prediction below</h5>
                            <br></br>
                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="lighten-5" style={{margin: 10, marginBottom: 0, maxWidth:400, padding:10, borderRadius: 20}}>
                                
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    <div className="col s1" style={{width: 20, height:20}} style={{padding:0, paddingRight: 0}}>
                                        <img style={{width: 20, height:20}} src="https://d33wubrfki0l68.cloudfront.net/fcd4ecd90386aeb50a235ddc4f0063cfbb8a7b66/4295e/static/bfc04ac72981166c740b189463e1f74c/40129/eth-diamond-black-white.jpg" alt="" className="circle responsive-img"/>
                                    </div>
                                    <div className="col s2 my-container"></div>
                                    <div className="col s5 my-container" style={{padding:0, paddingBottom: 5, paddingLeft: 0.5}}>
                                        
                                            Ethereum - ETH                        
                                    
                                    </div>
                                    
                                    <div className="col s2 my-container"></div>
                                    <div className="col s3 my-container"></div>
                                    <div className="col 3" style={{marginLeft: 10}}>
                                    
                                        <p style={{fontWeight: 'bold', fontSize: 10}}>$2,780.32</p>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {/* graph */}
                    <div className="user-prediction-card">

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="lighten-5" style={{margin: 0, maxWidth:400, padding:10, borderRadius: 20}}>
                                <div className="row valign-wrapper center-block" style={{margin: 0, position: 'relative'}}>
                                    
                                    <img style={{float: 'left'}} src="https://i.ibb.co/4pgJZzF/Screenshot-2022-03-05-at-8-16-31-AM.png" style={{maxHeight: 175}}/>
                                    <img id="graph_arrow" style={{width: 40, height: 50, float: 'right', transform: 'translateY(75%)'}} src="https://i.ibb.co/dMydHWS/Screenshot-2022-03-05-at-8-37-04-AM.png" alt="" className="responsive-img"/>

                                </div>
                                
                            </div>
                        </div>

                    </div>

                    {/* graph buttons */}
                    <div className="user-prediction-card">




        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="lighten-5" style={{margin: 0, maxWidth:400, padding:10, borderRadius: 20}}>
                

                <div className="row valign-wrapper" style={{margin: 0}}>
                <a className="waves-effect waves-teal btn-flat choose_date_btn1" id="1_Week1"  style={{fontSize: 10, color: 'gray', margin:5, borderRadius: 15, textTransform: 'unset', border: 'none', borderWidth: 1, backgroundColor: '#f7f7f7', borderColor: '#d6d6d6'}}>1D</a> 
                <a className="waves-effect waves-teal btn-flat choose_date_btn1" id="1_Month1"  style={{fontSize: 10, color: 'gray', marginLeft:58, marginRight:40, borderRadius: 15, paddingLeft: 10, paddingRight:10, textTransform: 'unset', border: 'none', borderWidth: 1, borderColor: '#d6d6d6'}}>3MO</a>
                <a className="waves-effect waves-teal btn-flat choose_date_btn1" id="3_Months1" style={{fontSize: 10, color: 'gray', marginLeft:30, marginRight:30, borderRadius: 15, paddingLeft: 10, paddingRight:13, textTransform: 'unset', border: 'none', color: 'black', backgroundColor: '#f7f7f7', borderWidth: 1, borderColor: '#d6d6d6'}}>1Y</a>
                <a className="waves-effect waves-teal btn-flat choose_date_btn1" id="6_Months1"  style={{fontSize: 10, color: 'gray', margin:5, marginLeft: 40, borderRadius: 15, padding:10, paddingBottom: 0, paddingTop: 5, textTransform: 'unset', border: 'none', borderWidth: 1, borderColor: '#d6d6d6'}}>
                    <img style={{width: 20, height: 20}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX///8AAAClpaWUlJSgoKD39/eOjo5ZWVnW1tazs7PBwcHy8vLR0dFVVVW2trb7+/uBgYFBQUEICAitra1HR0fa2tpgYGBPT09FRUXKysrPXmYqAAAB9klEQVR4nO3dyVICMRhFYQLNPCg2ir7/i2oJuKX6T07adJ1vf0lOObChi9lMkiRJkiRJkiS1L8Ws38Mnbi7BM+sWprQNHrgLn1i7MO1D5y3jB1Yv7EPnnRoqXITO6xoqjP0Mtw0VTv7vcOr/Sz8OwfN+3g+PIxWGb0yzkN7zLKT3PAvpPc9Ces+zkN7zLKT3PAvpPc9Ces+zkN7zLKT3PAvpPc9Ces+zkN7zLKT3PAvpPc9Ces+zkN7zLKT3PAvpPc9Ces+zkN7zLKT3PAufeXwU8lj0ViVdM294uO83RW9VUvYNbx+eP5W8U2G3G+7iL7DvV33sM9u17Oer7cvYl5AkSZIkSZIkSZIkSZIkSZIkSVJT/v/zKHk3fE0prQrdhJF5w/Pvc1PncvcpLvOGi/uzb7HvVKkh94aPBzTfit6qpNwbTv8pWQvHZyG951lI73kW0nuehfSeZyG951lI73kW0nuehfSeZyG951lI73kW0nuehfSeZyG951lI73kW0nuehfSeZyG951lI73kW0nuehfSeZyG95xUr7OdDHDKuvBl0Ul+scKBj9IPJy3X0yMqF6RI88DN8Yu3CFPtF/YofWL2wC523eP7CjRd2DRVO/rc0+tU9l1YKr+F3i3Bi8MBu0NvvCO/4f2J/95IkSZIkSZKG+AZNVxQSyYs+sAAAAABJRU5ErkJggg==">

                    </img>
                </a>
                
                </div>
                
                
            </div>
        </div>

      
      
      
      
                    </div>

                    {/* when and target */}
                    <div className="user-prediction-card">

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="card-panel lighten-5 z-depth-1" style={{margin: 20, marginBottom: 0, maxWidth:400, padding:10, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    <div className="col s2 my-container">
                                        <img style={{width: 20, height: 20, marginTop: 5}} src="https://screenshots.imgix.net/mui-org/material-ui-icons/access-time/~v=3.9.2/dbfb0667-748a-47ac-b297-188fb3e1fc4c.png?ixlib=js-1.2.0&s=b94775ecd8a75da35a6fb55d9e0dd4a5" alt="" className="circle responsive-img"/>
                                    </div>

                                    <div className="col s5" onClick={() => toggle_date_selector()}>
                
                                        
                                        <p style={{margin: 0, fontSize: 10}}><b>WHEN?&nbsp;</b><u id="date_prediction_text">1 Day</u></p>
                                    </div>

                                    <div className="col s7" style={{marginLeft: 10}}>
                                        <div onClick={() => switch_direction()}>
                                            <p style={{float: 'left', fontSize: 10}}><b>🚀&nbsp;&nbsp;TARGET:&nbsp;&nbsp;</b></p>
                                            <div style={{float: 'right'}}>
                                            <img id="when_card_arrow_img" style={{width: 25, height: 35, marginTop: 0, float: 'left'}} src="https://i.ibb.co/dMydHWS/Screenshot-2022-03-05-at-8-37-04-AM.png"/>
                                        
                                            <b id="direction_text" style={{float: 'right', fontSize: 11, marginTop: 10}}>UP</b>
                                        </div>
                                       
                                        </div>
                                        
                                        
                                    </div>
                               
                                      
                                    

                                   
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* select date time */}
                    <div className="user-prediction-card" id="date_time" style={{display: 'none', marginLeft: 8}}>




        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="lighten-5" style={{margin: 0, maxWidth:400, padding:10, borderRadius: 20}}>

                <div className="row valign-wrapper" style={{margin: 0}}>
                <a className="waves-effect waves-teal btn choose_date_btn" id="1_Week" onClick={() => {choose_date('1_Week');}} style={{fontSize: 10, color: 'white', margin:5, borderRadius: 10, textTransform: 'unset', border: 'solid', borderWidth: 1, borderColor: '#d6d6d6'}}>1&nbsp;Day</a> 
                <a className="waves-effect waves-teal btn-flat choose_date_btn" id="1_Month" onClick={() => {choose_date('1_Month');}} style={{fontSize: 10, color: 'gray', margin:5, borderRadius: 10, paddingLeft: 10, paddingRight:10, textTransform: 'unset', border: 'solid', borderWidth: 1, borderColor: '#d6d6d6'}}>1&nbsp;Week</a>
                <a className="waves-effect waves-teal btn-flat choose_date_btn" id="3_Months" onClick={() => {choose_date('3_Months');}} style={{fontSize: 10, color: 'gray', margin:5, borderRadius: 10, paddingLeft: 10, paddingRight:13, textTransform: 'unset', border: 'solid', borderWidth: 1, borderColor: '#d6d6d6'}}>1&nbsp;Month</a>
                <a className="waves-effect waves-teal btn-flat choose_date_btn" id="6_Months" onClick={() => {choose_date('6_Months');}} style={{fontSize: 10, color: 'gray', margin:5, borderRadius: 10, paddingLeft: 10, paddingRight:13, textTransform: 'unset', border: 'solid', borderWidth: 1, borderColor: '#d6d6d6'}}>3&nbsp;Months</a>
                <a className="waves-effect waves-teal btn-flat choose_date_btn" id="1_Year" onClick={() => {choose_date('1_Year');}} style={{fontSize: 10, color: 'gray', margin:5, borderRadius: 10, paddingLeft: 10, paddingRight:13, textTransform: 'unset', border: 'solid', borderWidth: 1, borderColor: '#d6d6d6'}}>6&nbsp;Months</a>
                </div>
                
                
            </div>
        </div>

        <div className="row valign-wrapper" id="starting_date_text" style={{margin: 0, maxWidth: 400}}>
                  <p style={{fontWeight: 'bold', margin:0}}>Starting Date</p>
                </div>
        <div className="row valign-wrapper" id="starting_date_selector" style={{margin: 0, marginTop:5, marginBottom:5, padding:7, maxWidth: 400, border: 'solid', borderWidth: 0.5, borderRadius: 10, borderColor: '#d6d6d6'}}>
                  <input id="choose_date" placeholder="Pick a date" type="date" onChange={() => {reset_input();}} style={{color: 'gray', border: 'none', margin: 0}}></input>
                </div>
      
      
                    </div>
                    
                    {/* your bet */}
                    <div className="user-prediction-card">

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="card-panel lighten-5 z-depth-1" style={{margin: 20, maxWidth:400, padding:10, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    <div className="col s2 my-container">
                                        <img style={{width: 20, height: 20}} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/money-bag_1f4b0.png" alt="" className="circle responsive-img"/>
                                    </div>

                                    <div className="col s5">
                
                                        
                                        <p style={{margin: 0, fontSize: 13}}><b>YOUR BET:&nbsp;&nbsp;&nbsp;</b></p>
                                    </div>

                                    <div className="col s9" style={{marginLeft: 10}}>
                                        
                                        <p style={{color: 'gray'}}>&nbsp;10K $PLAY</p>
                                        
                                    
                                        
                                    </div>

                                    

                                   
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* submit */}
                    <div className="user-prediction-card" id="submit_prediction_row" style={{display: 'none'}}>

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="lighten-5" style={{margin: 20, maxWidth:400, padding:10, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    {/* <!-- Modal Trigger --> */}
                                    <a style={{margin: 'auto'}} className="waves-effect waves-light btn modal-trigger" id="submit_btn" href="#modal1">SUBMIT PREDICTION</a>

                                    {/* <!-- Modal Structure --> */}
                                    <div id="modal1" className="modal">
                                    <div className="modal-content">
                                        <h4 id="submit_header">Submit Prediction?</h4>
                                        <p style={{border: 'solid', borderWidth: 1, borderColor: 'gray'}} id="their_prediction">Their Prediction: </p>
                                        <p style={{border: 'solid', borderWidth: 1, borderColor: 'gray'}} id="your_prediction">Your Prediction: ETH will go down in 1 Week</p>
                                    </div>
                                    <div className="modal-footer">
                                        <a onClick={() => {submit();}} id="yes_button" className="waves-effect waves-green btn-flat">Yes</a>
                                        <a id="no_button" className="modal-close waves-effect waves-green btn-flat">No</a>
                                    </div>
                                    </div>                                    
                                
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* share on imessage */}
                    <div className="user-prediction-card" onClick={() => share_prediction()}>

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="lighten-5" style={{margin: 20, maxWidth:400, padding:10, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    <div className="col s2 my-container">
                                        <img style={{width: 35, height: 35, marginTop: 5}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/1024px-IMessage_logo.svg.png" alt="" className="responsive-img"/>
                                    </div>

                                    <div className="col s10">
                
                                        
                                        <p style={{margin: 0, fontSize: 20}}><b>SHARE VIA IMESSAGE</b></p>
                                    </div>

                                    

                                    

                                   
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* footer */}
                    <div className="user-prediction-card">

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="lighten-5" style={{margin: 20, maxWidth:400, padding:10, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    <div className="col s2 my-container">
                                        {/* <img style={{width: 40, height: 40}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/1024px-IMessage_logo.svg.png" alt="" className="responsive-img"/> */}
                                    </div>

                                    <div className="col s10">
                
                                        
                                        <p style={{margin: 0, fontSize: 20}}><b></b></p>
                                    </div>

                                    

                                    

                                   
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
        </center>
        </ScrollView>
        {/* footer */}
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}><Text></Text></View>

       </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    red: {
      color: 'red',
    },
  });