import React from 'react'
import SimpleMenu from './Menu';

class Pricing extends React.Component {
    render() {
        return (
            <div className="pricing">
                <header className="title">MUGSHOT PHOTOBOOTH</header>
                <SimpleMenu className="menu" />
                <p className="pricing-header">  
                    PACKAGES & PRICING
                </p>
                <p className="pricing-body">
                    Below is my "Open Backdrop Photo Booth" Package.  
                    What makes MUGSHOT PHOTOBOOTH unique is that we 
                    will custom design every Backdrop and Photo Strip 
                    Template with you guiding us through it!  If you'd 
                    like an "Extra" let us know so we can accomodate 
                    to your event the best we can.
                </p>
                <p className="pricing-body2">
                    *While I do offer a closed Photo Booth (mall style), 
                    I only do by special request.  If that's what you're 
                    looking for, head over to the "CONTACT" tab!
                </p>
                <table className="table">
                    <tr>
                        <th className="table-header-main">
                            My Basic Photobooth Coverage Includes:
                        </th>
                        <th className="table-header">
                            Price- $300
                        </th>
                    </tr>
                    <tr>
                        <td className="table-main">
                            Full Time Professional Host
                        </td>
                        <td className="table-body">
                        ​   ✓
                        </td>
                    </tr>
                    <tr>
                        <td className="table-main">
                            Set-up (at least 30 minutes before the event) and Take-down
                        </td>
                        <td className="table-body">
                        ​   ✓
                        </td>
                    </tr>
                    <tr>
                        <td className="table-main">
                            100% Customizable Photo Strips with Unique Templates​
                        </td>
                        <td className="table-body">
                            ✓   
                        </td>
                    </tr>
                    <tr>
                        <td className="table-main">
                            Custom Backdrop- Picked by you, designed by me!
                        </td>
                        <td className="table-body">
                            ✓
                        </td>
                    </tr>
                    <tr>
                        <td className="table-main">
                        ​   Online Gallery of Photos from Your Event​
                        </td>
                        <td className="table-body">
                            ✓
                        </td>
                    </tr>
                    <tr>
                        <td className="table-main">
                            2 hour Event Coverage with Unlimited Photo Strips
                        </td>
                        <td className="table-body">
                            ✓
                        </td>
                    </tr>
                    <tr>
                        <td className="table-main">
                            Distance- 20 Mile Radius
                        </td>
                        <td className="table-body">
                            ✓
                        </td>
                    </tr>
                    <tr>
                        <td className="table-main">
                            Unlimited Photo Strips (One per person per shoot)
                        </td>
                        <td className="table-body">
                            ✓
                        </td>
                    </tr>
                    <tr>
                        <td className="table-main">
                            Props that fit your event
                        </td>
                        <td className="table-body">
                            ✓
                        </td>
                    </tr>
                </table>
                <p className="pricing-header">
                    EXTRAS:
                </p>
                <table className="table">
                    <tr>
                        <th className="table-header-main">
                            Options
                        </th>
                        <th className="table-header">
                            Prices
                        </th>
                    </tr>
                    <tr>
                        <td className="table-main">
                            Special Request Props or Extra Cost Backdrop
                        </td>
                        <td className="table-body">
                            TBD
                        </td>
                    </tr>
                    <tr>
                        <td className="table-main">
                            Extra Set of Prints for Guestbook
                        </td>
                        <td className="table-body">
                            $25
                        </td>
                    </tr>
                    <tr>
                        <td className="table-main">
                            Extra Hour of Event Coverage
                        </td>
                        <td className="table-body">
                            $50
                        </td>
                    </tr>
                    <tr>
                        <td className="table-main">
                            Outside of 20 Mile Radius
                        </td>
                        <td className="table-body">
                            TBD
                        </td>
                    </tr>
                    <tr>
                        <td className="table-main">
                            Use a Pre-made Backdrop (@ BACKDROPS & PROPS tab)
                        </td>
                        <td className="table-body">
                            $50 Discount
                        </td>
                    </tr>
                    <tr>
                        <td className="table-main">
                            Removal of Mugshot Photobooth text on Photo Strips
                        </td>
                        <td className="table-body">
                            $50
                        </td>
                    </tr>
                </table>
                <p className="pricing-footer">
                    *To hold your date, there will be a $50 refundable deposit that is put toward your 
                    total event cost. Inquiries are only 100% reserved upon completion of the deposit.
                </p>
                <p className="pricing-footer"> 
                    *We accept payment through Venmo (@talia679), Paypal, or credit card one week before 
                    your event, or cash at the beginning of the event.
                </p>
            </div>
        )
    }
}

export default Pricing;