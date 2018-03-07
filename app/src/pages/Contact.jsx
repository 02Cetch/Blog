import React, {Component, Fragment} from 'react';

import $ from "jquery";

import Preloader from '../components/Preloader';

export default class Contact extends Component{ // страница контактов
    componentDidMount(){
        //E-mail Ajax Send
                $("form").submit(function() { //Change
                    var th = $(this);
                    $.ajax({
                        type: "POST",
                        url: "mail.php", //Change
                        data: th.serialize()
                    }).done(function() {
                        $(th).find('.success').addClass('.active').css('dislay', 'flex').hide().fadeIn()
                        setTimeout(function() {
                            $(th).find('.success').removeClass('active').fadeOut();
                            // Done Functions
                            th.trigger("reset");
                        }, 3000);
                    });
                    return false;
                });
                $(window).on('load', function(){
                    $('.preloader').delay(1000).fadeOut('slow');
                });
        }    
    render(){
    return(
            <Fragment>
                <section className="s-contact">
                    <div className="container">
                        <form name="htmlform" method="post" action="">   
                            <input type="hidden" name="project_name" value="Blog"/>
                            <input type="hidden" name="admin_email" value="shadowchannel7@gmail.com"/>
                            <input type="hidden" name="form_subject" value="Contact email from Blog"/>    

                            <input type="text" name="first_name" placeholder="NAME" required/>          
                            <input  type="email" name="email" placeholder="MAIL" required/>              
                            <textarea name="comments" placeholder="MESSAGE" required ></textarea>             
                            <button name="send" type="submit" className="submit">SEND</button>        
                        </form>      
                    </div>
                </section>
                <Preloader/>  
            </Fragment>
        )
    }
}