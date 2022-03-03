import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { TextInput, TextField, Input } from 'react-native';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

import 'materialize-css/dist/css/materialize.min.css'

export default class CustomText extends React.Component { 
    render() { 
        function reset_input(){
            for(var i=0; i< document.getElementsByClassName("choose_date_btn").length; i++){
              var id= String(document.getElementsByClassName("choose_date_btn")[i].id)
              document.getElementById(id).classList.remove("btn")
              document.getElementById(id).classList.add("btn-flat")
              document.getElementById(id).style.color="gray"
            }
          }
        
          function choose_price(e){
            
            document.getElementById("choose_price").innerHTML=String(e)
        
            for(var i=0; i< document.getElementsByClassName("choose_price_btn").length; i++){
              var id= String(document.getElementsByClassName("choose_price_btn")[i].id)
              document.getElementById(id).classList.remove("btn")
              document.getElementById(id).classList.add("btn-flat")
              document.getElementById(id).style.color="gray"
            }
        
            document.getElementById(String(e)).classList.remove("btn-flat")
            document.getElementById(String(e)).classList.add("btn")
            document.getElementById(String(e)).style.color="white"
          }
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
          }, false);
        
          function choose_date(e){
            var today = new Date();
            var next_formatted = ""
            switch(String(e)) {
              case "1_Week":
                var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
                var monthString = String(nextweek.getMonth()+1)
                var dateString = String(nextweek.getDate())
                if(nextweek.getDate() < 10){
                  dateString = "0"+String(nextweek.getDate())
                }
                if((nextweek.getMonth()+1) < 10){
                  monthString = "0"+(nextweek.getMonth()+1)
                }
                next_formatted =  nextweek.getFullYear() + "-" + monthString + "-" + dateString
                break;
              case "1_Month":
                var nextweek = new Date(today.getFullYear(), today.getMonth()+1, today.getDate());
                var monthString = String(nextweek.getMonth()+1)
                var dateString = String(nextweek.getDate())
                if(nextweek.getDate() < 10){
                  dateString = "0"+String(nextweek.getDate())
                }
                if((nextweek.getMonth()+1) < 10){
                  monthString = "0"+(nextweek.getMonth()+1)
                }
                next_formatted =  nextweek.getFullYear() + "-" + monthString + "-" + dateString
                break;
              case "3_Months":
                var nextweek = new Date(today.getFullYear(), today.getMonth()+3, today.getDate());
                var monthString = String(nextweek.getMonth()+1)
                var dateString = String(nextweek.getDate())
                if(nextweek.getDate() < 10){
                  dateString = "0"+String(nextweek.getDate())
                }
                if((nextweek.getMonth()+1) < 10){
                  monthString = "0"+(nextweek.getMonth()+1)
                }
                next_formatted =  nextweek.getFullYear() + "-" + monthString + "-" + dateString 
                break;
              case "6_Months":
                var nextweek = new Date(today.getFullYear(), today.getMonth()+6, today.getDate());
                var monthString = String(nextweek.getMonth()+1)
                var dateString = String(nextweek.getDate())
                if(nextweek.getDate() < 10){
                  dateString = "0"+String(nextweek.getDate())
                }
                if((nextweek.getMonth()+1) < 10){
                  monthString = "0"+(nextweek.getMonth()+1)
                }
                next_formatted =  nextweek.getFullYear() + "-" + monthString + "-" + dateString
                break;
              case "1_Year":
                var nextweek = new Date(today.getFullYear()+1, today.getMonth(), today.getDate());
                var monthString = String(nextweek.getMonth()+1)
                var dateString = String(nextweek.getDate())
                if(nextweek.getDate() < 10){
                  dateString = "0"+String(nextweek.getDate())
                }
                if((nextweek.getMonth()+1) < 10){
                  monthString = "0"+(nextweek.getMonth()+1)
                }
                next_formatted =  nextweek.getFullYear() + "-" + monthString + "-" + dateString 
                break;
              default:
                console.log(e)
            }
        
            document.getElementById("choose_date").value=next_formatted
        
            for(var i=0; i< document.getElementsByClassName("choose_date_btn").length; i++){
              var id= String(document.getElementsByClassName("choose_date_btn")[i].id)
              document.getElementById(id).classList.remove("btn")
              document.getElementById(id).classList.add("btn-flat")
              document.getElementById(id).style.color="gray"
            }
        
            document.getElementById(String(e)).classList.remove("btn-flat")
            document.getElementById(String(e)).classList.add("btn")
            document.getElementById(String(e)).style.color="white"
        
          }
      return (
        <View style={styles.container}> 
            <center>
      <h1 style={{fontWeight: 'bold', margin: 5, marginTop: 25}} id="title" className="flow-text">New Prediction</h1>
      
      
      <div className="user-prediction-card">


        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="lighten-5" style={{margin: 10, maxWidth:400, padding:10, borderRadius: 20}}>
                <div className="row valign-wrapper" style={{margin: 0}}>
                    
                    <div className="col s3 my-container">
                        <img src="https://bitcoin.org/img/icons/opengraph.png?1644775669" alt="" className="circle responsive-img"/>
                    </div>
                    <div className="col s9 my-container"></div>

                    <div className="col 3" style={{marginLeft: 10}}>
                        <p style={{fontWeight: 'bold'}}>$38,252.80</p>
                    </div>
                </div>
                
            </div>
        </div>

      </div>

      
      <div className="user-prediction-card">


<div className="col s12 m8 offset-m2 l6 offset-l3">
    <div className="lighten-5" style={{margin: 10, maxWidth:400, padding:10, borderRadius: 20}}>
        <div className="row valign-wrapper center-block" style={{margin: 0}}>
            
          <img src="https://i.ibb.co/hgLHbD2/candlestick.png" style={{maxHeight: 230}}/>
        </div>
        
    </div>
</div>

      </div>

      
      <div className="user-prediction-card">




        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="lighten-5" style={{margin: 0, maxWidth:400, padding:10, borderRadius: 20}}>
                <div className="row valign-wrapper" style={{margin: 0}}>
                  <p style={{fontWeight: 'bold', margin:0}}>Expected Price</p>
                </div>

                <div className="row valign-wrapper" style={{margin: 0, marginTop:5, marginBottom:5, padding:7, border: 'solid', borderWidth: 0.5, borderRadius: 10, borderColor: '#d6d6d6'}}>
                  <p id="choose_price" style={{color: 'gray', margin: 0}}>Choose a price</p>
                </div>

                <div className="row valign-wrapper" style={{margin: 0}}>
                <a className="waves-effect waves-teal btn-flat choose_price_btn" id="-20%" onClick={() => {choose_price('-20%');}} style={{fontSize: 10, color: 'gray', margin:5, textTransform: 'unset', border: 'solid', borderWidth: 1, borderRadius: 10, borderColor: '#d6d6d6'}}>-20%</a> 
                <a className="waves-effect waves-teal btn-flat choose_price_btn" id="-10%" onClick={() => {choose_price('-10%');}} style={{fontSize: 10, color: 'gray', margin:5, textTransform: 'unset', border: 'solid', borderWidth: 1, borderRadius: 10, borderColor: '#d6d6d6'}}>-10%</a>
                <a className="waves-effect waves-teal btn-flat choose_price_btn" id="-5%" onClick={() => {choose_price('-5%');}} style={{fontSize: 10, color: 'gray', margin:5, textTransform: 'unset', border: 'solid', borderWidth: 1, borderRadius: 10, borderColor: '#d6d6d6'}}>-5%</a>
                <a className="waves-effect waves-teal btn-flat choose_price_btn" id="5%" onClick={() => {choose_price('5%');}} style={{fontSize: 10, color: 'gray', margin:5, textTransform: 'unset', border: 'solid', borderWidth: 1, borderRadius: 10, borderColor: '#d6d6d6'}}>5%</a>
                <a className="waves-effect waves-teal btn-flat choose_price_btn" id="10%" onClick={() => {choose_price('10%');}} style={{fontSize: 10, color: 'gray', margin:5, textTransform: 'unset', border: 'solid', borderWidth: 1, borderRadius: 10, borderColor: '#d6d6d6'}}>10%</a>
                <a className="waves-effect waves-teal btn-flat choose_price_btn" id="20%" onClick={() => {choose_price('20%');}} style={{fontSize: 10, color: 'gray', margin:5, textTransform: 'unset', border: 'solid', borderWidth: 1, borderRadius: 10, borderColor: '#d6d6d6'}}>20%</a>
                </div>
                
                
            </div>
        </div>

      
      
      
      
      </div>

      
      <div className="user-prediction-card">




        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="lighten-5" style={{margin: 0, maxWidth:400, padding:10, borderRadius: 20}}>
                <div className="row valign-wrapper" style={{margin: 0}}>
                  <p style={{fontWeight: 'bold', margin:0}}>Target Date</p>
                </div>

                <div className="row valign-wrapper" style={{margin: 0, marginTop:5, marginBottom:5, padding:7, border: 'solid', borderWidth: 0.5, borderRadius: 10, borderColor: '#d6d6d6'}}>
                  <input id="choose_date" placeholder="Pick a date" type="date" onChange={() => {reset_input();}} style={{color: 'gray', border: 'none', margin: 0}}></input>
                </div>

                <div className="row valign-wrapper" style={{margin: 0}}>
                <a className="waves-effect waves-teal btn-flat choose_date_btn" id="1_Week" onClick={() => {choose_date('1_Week');}} style={{fontSize: 10, color: 'gray', margin:5, borderRadius: 10, textTransform: 'unset', border: 'solid', borderWidth: 1, borderColor: '#d6d6d6'}}>1&nbsp;Week</a> 
                <a className="waves-effect waves-teal btn-flat choose_date_btn" id="1_Month" onClick={() => {choose_date('1_Month');}} style={{fontSize: 10, color: 'gray', margin:5, borderRadius: 10, paddingLeft: 10, paddingRight:10, textTransform: 'unset', border: 'solid', borderWidth: 1, borderColor: '#d6d6d6'}}>1&nbsp;Month</a>
                <a className="waves-effect waves-teal btn-flat choose_date_btn" id="3_Months" onClick={() => {choose_date('3_Months');}} style={{fontSize: 10, color: 'gray', margin:5, borderRadius: 10, paddingLeft: 10, paddingRight:13, textTransform: 'unset', border: 'solid', borderWidth: 1, borderColor: '#d6d6d6'}}>3&nbsp;Months</a>
                <a className="waves-effect waves-teal btn-flat choose_date_btn" id="6_Months" onClick={() => {choose_date('6_Months');}} style={{fontSize: 10, color: 'gray', margin:5, borderRadius: 10, paddingLeft: 10, paddingRight:13, textTransform: 'unset', border: 'solid', borderWidth: 1, borderColor: '#d6d6d6'}}>6&nbsp;Months</a>
                <a className="waves-effect waves-teal btn-flat choose_date_btn" id="1_Year" onClick={() => {choose_date('1_Year');}} style={{fontSize: 10, color: 'gray', margin:5, borderRadius: 10, paddingLeft: 10, paddingRight:13, textTransform: 'unset', border: 'solid', borderWidth: 1, borderColor: '#d6d6d6'}}>1&nbsp;Year</a>
                </div>
                
                
            </div>
        </div>

      
      
      
      
      </div>

      
      <div className="user-prediction-card">




  <div className="col s12 m8 offset-m2 l6 offset-l3">
      <div className="lighten-5" style={{margin: 0, maxWidth:400, padding:10, borderRadius: 20}}>
          <div className="row valign-wrapper" style={{margin: 0}}>
            <p style={{fontWeight: 'bold', margin:0}}>Description</p>
          </div>

          <div className="row valign-wrapper" style={{margin: 0, marginTop:5, marginBottom:5, padding:10, border: 'solid', borderWidth: 0.5, borderRadius: 10, borderColor: '#d6d6d6'}}>
            <input placeholder="Add a short headline or description..." style={{color: 'gray', border: 'none', margin: 0}}></input>
          </div>

          
          
          
      </div>
  </div>





      </div>

      
      <div className="user-prediction-card">




      <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div className="lighten-5" style={{margin: 0, maxWidth:400, padding:4, borderRadius: 20}}>
              

              <div className="row valign-wrapper center-block" style={{margin: 0, marginTop:5, marginBottom:5, borderColor: '#d6d6d6'}}>
                <a className="waves-effect waves-light btn" style={{width: '100%', backgroundColor: '#058c66', textTransform: 'unset', borderRadius: 25}}>Post</a>
              </div>

              
              
              
          </div>
      </div>





      </div>

     </center>
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