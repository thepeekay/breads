const React = require('react')
const Default = require('./layouts/Default')

function FourZeroFour() {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
    return (
        <Default>
            <div className="fourzerofour">
                <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg?format=750w" alt="404 image of Sadness"></img>
                <h1>AWWW... Don't cry.</h1>
                <h3>It's just a 404 error!</h3>
                <h3>What you're looking for may have been misplaced in Long Term Memory</h3>
            </div>
        </Default>
    )
}

module.exports = FourZeroFour
