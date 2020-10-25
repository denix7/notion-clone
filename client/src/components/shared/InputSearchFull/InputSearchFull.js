import React from 'react'
import style from '../InputSearchFull/InputSearchFull.module.css';

export const InputSearchFull = () => {
    function openSearch() {
        document.getElementById("myOverlay").style.display = "block";
      }
      
      // Close the full screen search box
      function closeSearch() {
        document.getElementById("myOverlay").style.display = "none";
      }
      
    return (
        <div>
            <div id="myOverlay" className="overlay">
                <span className="closebtn" onClick={closeSearch} title="Close Overlay">x</span>
                <div className="overlay-content">
                    <form action="action_page.php">
                        <input type="text" placeholder="Search.." name="search"></input>
                            <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
            )
        }
