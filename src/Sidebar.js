import React from 'react'
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Category</h2>
           
            <h3>Priority Commissions</h3>
            <h3>New Commissions</h3>
            <h3>Short-term Commissions</h3>
            <h3>Long-term Commissions</h3>
            <h3>Permanent Commissions</h3>

            <div className="sidebar__bottom">
                <h2>Your Commissions</h2>

                <h3>Accepted Commissions</h3>
                <h3>Finished Commissions</h3>
                <h3>Saved Commissions</h3>

            </div>

        </div>
    )
}

export default Sidebar
