import totalBet from '../public/assets/images/total-bet.png'
import userCircle from '../public/assets/images/user_circle.png'
import download from '../public/assets/images/download.png'
import settingFill from '../public/assets/images/setting-fill.png'
import book from '../public/assets/images/book.png'
import serverFill from '../public/assets/images/server-fill.png'
import data from '../public/assets/images/data.png'
import stackFrame from '../public/assets/images/stackframe.png'
import subTasks from '../public/assets/images/subttasks.png'
import settingAlt from '../public/assets/images/setting-alt.png'
import bag from '../public/assets/images/bag.png'
import dashboard from '../public/assets/images/dashboard.png'
import edit from '../public/assets/images/edit.png'
import percent from '../public/assets/images/percent.png'
import chartFill from '../public/assets/images/chart-fill.png'
import questionBlock from '../public/assets/images/question-block.png'
import lock from '../public/assets/images/lock.png'
import shield from '../public/assets/images/shield.png'
import pin from '../public/assets/images/pin.png'
import transfer from '../public/assets/images/transfer.png'
import chartAlt from '../public/assets/images/chart-alt.png'
import pipe from '../public/assets/images/pipe.png'
import money from '../public/assets/images/money.png'
import resource from '../public/assets/images/resource.png'
import bookmark from '../public/assets/images/bookmark.png'
import bug from '../public/assets/images/bug.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useEffect} from "react";
import $ from "jquery";

export default function Menu() {

    return(
        <>
            <div className="menu-block pb-2">
                <ul id="sider-menu" className="nav flex-column text-white w-100">
                    <li className="nav-item">
                        <a href="#manager" className="nav-link nav-header collapsed" data-bs-toggle={'collapse'}>
                            <img src={totalBet.src} alt="" className="icon-menu me-3"/>
                            <span className="me-auto">
                                Total Bet ( Risk Management )
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </a>
                        <div id="manager" className="accordion-collapse collapse block-bg mx-1" data-bs-parent='#menu'>
                            <Link href="/total-bet/member-total" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={userCircle.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Member Total</span>
                            </Link>
                            <Link href="/total-bet/simple-ft" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={download.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Simple FT HDP & OU</span>
                            </Link>
                            <Link href="/total-bet/simple-ht" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={settingFill.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Simple HT HDP & OU</span>
                            </Link>

                            <Link href="/total-bet/simple-ht-oe" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={book.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Simple HT OE</span>
                            </Link>
                            <Link href="/total-bet/simple-ft-oe" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={serverFill.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Simple FT OE</span>
                            </Link>
                            <Link href="/total-bet/onextwo" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={data.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>1X2</span>
                            </Link>

                            <Link href="/total-bet/double" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={stackFrame.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Double Chance</span>
                            </Link>
                            <Link href="/total-bet/money-line" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={subTasks.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Money Line</span>
                            </Link>
                            <Link href="/total-bet/total-gold" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={settingAlt.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Total Gold</span>
                            </Link>

                            <Link href="/total-bet/ht-ft" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={bag.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>HT/ FT</span>
                            </Link>
                            <Link href="/total-bet/fg-lg" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={dashboard.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>FG/LG</span>
                            </Link>
                            <Link href="/total-bet/lx2" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={edit.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Asian LX2</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#sale" className="nav-link nav-header py-3" data-bs-toggle='collapse'>
                            <img src={percent.src} alt="" className="icon-menu me-3"/>
                            <span className="me-auto">Sale team management</span>
                            <span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </a>
                        <div id="sale" className="accordion-collapse collapse block-bg mx-1" data-bs-parent='#menu'>
                            <Link href="/sale/agent-group" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={userCircle.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Create Sub Account</span>
                            </Link>
                            <Link href="/sale/agent-group-list" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={userCircle.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Agent Group</span>
                            </Link>
                            <Link href="/sale/agent-report" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={userCircle.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Agent Report</span>
                            </Link>

                            <Link href="/sale/commission-report" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={book.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Commission Report</span>
                            </Link>
                            <Link href="/sale/player-list" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={serverFill.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Player List</span>
                            </Link>
                            <Link href="/sale/player-report" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={data.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Player Report</span>
                            </Link>

                            <Link href="/sale/betting-history" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={stackFrame.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Betting History</span>
                            </Link>
                            <Link href="/sale/transaction-log" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={subTasks.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>All Transaction Logs</span>
                            </Link>

                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#member" className="nav-link nav-header collapsed py-3" data-bs-toggle={'collapse'}>
                            <img src={chartFill.src} alt="" className="icon-menu me-3"/>
                            <span className="me-auto">
                                Member Management
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </a>
                        <div id="member" className="accordion-collapse collapse block-bg mx-1" data-bs-parent='#menu'>
                            <Link href="/member-management/new-sh" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={userCircle.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>New SH</span>
                            </Link>
                            <Link href="/member-management/new-ssma" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={download.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>New SSMA</span>
                            </Link>
                            <Link href="/member-management/account-list" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={settingFill.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Account List</span>
                            </Link>

                            <Link href="/member-management/bet-setting" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={book.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Credit Bet Setting</span>
                            </Link>
                            <Link href="/member-management/commission" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={serverFill.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Commission</span>
                            </Link>
                            <Link href="/member-management/credit" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={data.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Credit</span>
                            </Link>

                            <Link href="/member-management/preset" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={stackFrame.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Preset PT</span>
                            </Link>
                            <Link href="/member-management/effective" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={subTasks.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Effective PT</span>
                            </Link>
                            <Link href="/member-management/balance" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={settingAlt.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Credit & Balance</span>
                            </Link>

                            <Link href="/member-management/update-league" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={bag.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>League Bet Setting</span>
                            </Link>
                            <Link href="/member-management/update-league-group" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={dashboard.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>League Group Bet Setting</span>
                            </Link>
                            <Link href="/member-management/third-party" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={edit.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Third Party Game Bet Settings</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#report" className="nav-link nav-header collapsed py-3" data-bs-toggle={'collapse'} data-bs-parent={'#menu'}>
                            <img src={chartAlt.src} alt="" className="icon-menu me-3"/>
                            <span className="me-auto">
                                Report
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </a>
                        <div id="report" className="accordion-collapse collapse block-bg mx-1" data-bs-parent='#menu'>
                            <Link href="#" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={userCircle.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Win Lose</span>
                            </Link>
                            <Link href="/report/winlose-player" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={download.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Win Lose By Player</span>
                            </Link>
                            <Link href="/report/winlose-chart" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={settingFill.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Win Lose Chart Report</span>
                            </Link>

                            <Link href="/report/winlose-simple" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={book.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Winlose Simple</span>
                            </Link>
                            <Link href="/report/cancel-list" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={serverFill.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Cancelled Bet List</span>
                            </Link>
                            <Link href="/report/result" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={data.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Match Result</span>
                            </Link>

                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#transfer" className="nav-link nav-header collapsed py-3" data-bs-toggle={'collapse'}>
                            <img src={chartFill.src} alt="" className="icon-menu me-3"/>
                            <span className="me-auto">
                                Transfer
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </a>
                        <div id="transfer" className="accordion-collapse collapse block-bg mx-1" data-bs-parent='#menu'>
                            <Link href="/transfer/full-transfer" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={userCircle.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>New SH</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#account" className="nav-link nav-header collapsed py-3" data-bs-toggle={'collapse'} data-bs-parent={'#menu'}>
                            <img src={chartAlt.src} alt="" className="icon-menu me-3"/>
                            <span className="me-auto">
                                Account
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </a>
                        <div id="account" className="accordion-collapse collapse block-bg mx-1" data-bs-parent='#menu'>
                            <Link href="/" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={lock.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Balance</span>
                            </Link>
                            <Link href="/account/withdraw" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={shield.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Withdraw</span>
                            </Link>
                            <Link href="/account/deposit" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={pin.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Deposit</span>
                            </Link>

                            <Link href="/account/transfer" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={transfer.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Transfer</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#security" className="nav-link nav-header collapsed py-3" data-bs-toggle={'collapse'} data-bs-parent={'#menu'}>
                            <img src={pipe.src} alt="" className="icon-menu me-3"/>
                            <span className="me-auto">
                                Security
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </a>
                        <div id="security" className="accordion-collapse collapse block-bg mx-1" data-bs-parent='#menu'>
                            <Link href="/security/change-password" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={lock.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Change Password</span>
                            </Link>
                            <Link href="/security/change-login-name" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={shield.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Change Login Name</span>
                            </Link>
                            <Link href="/security/change-pincode" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={pin.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Change Pincode</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#sub-account" className="nav-link nav-header collapsed py-3" data-bs-toggle={'collapse'} data-bs-parent={'#menu'}>
                            <img src={money.src} alt="" className="icon-menu me-3"/>
                            <span className="me-auto">
                                Sub Account
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </a>
                        <div id="sub-account" className="accordion-collapse collapse block-bg mx-1" data-bs-parent='#menu'>
                            <Link href="/sub-account/create-sub-account" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={lock.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Create Sub Account</span>
                            </Link>
                            <Link href="/sub-account/sub-account-list" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={shield.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Sub Account List</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link href="/transaction" className="nav-link nav-header collapsed py-3">
                            <img src={shield.src} alt="" className="icon-menu me-3"/>
                            <span className="me-auto">
                                Transaction
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="#game" className="nav-link nav-header collapsed py-3" data-bs-toggle={'collapse'} data-bs-parent={'#menu'}>
                            <img src={lock.src} alt="" className="icon-menu me-3"/>
                            <span className="me-auto">
                                Game & Provider
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </a>
                        <div id="game" className="accordion-collapse collapse block-bg mx-1" data-bs-parent='#menu'>
                            <Link href="/game/game-list" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={lock.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Game list</span>
                            </Link>
                            <Link href="/game/game-result" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={shield.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Game Results</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#resource" className="nav-link nav-header collapsed py-3" data-bs-toggle={'collapse'} data-bs-parent={'#menu'}>
                            <img src={resource.src} alt="" className="icon-menu me-3"/>
                            <span className="me-auto">
                                Resource
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </a>
                        <div id="resource" className="accordion-collapse collapse block-bg mx-1" data-bs-parent='#menu'>
                            <Link href="/resource/manager" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={settingFill.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Manager</span>
                            </Link>
                            <Link href="/resource/manager-simple" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={settingAlt.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Manager Simple</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#admin" className="nav-link nav-header collapsed py-3" data-bs-toggle={'collapse'} data-bs-parent={'#menu'}>
                            <img src={bookmark.src} alt="" className="icon-menu me-3"/>
                            <span className="me-auto">
                                Web admin
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </a>
                        <div id="admin" className="accordion-collapse collapse block-bg mx-1" data-bs-parent='#menu'>
                            <Link href="/admin/custom-theme" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={settingFill.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Customize Themes</span>
                            </Link>
                            <Link href="/admin/admin-control" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={settingAlt.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Admin Control</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#company" className="nav-link nav-header collapsed py-3" data-bs-toggle={'collapse'} data-bs-parent={'#menu'}>
                            <img src={bug.src} alt="" className="icon-menu me-3"/>
                            <span className="me-auto">
                                Company
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </a>
                        <div id="company" className="accordion-collapse collapse block-bg mx-1" data-bs-parent='#menu'>
                            <Link href="/company/currency" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={settingFill.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Currency</span>
                            </Link>
                            <Link href="/company/language" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={settingAlt.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Language</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#monitor" className="nav-link nav-header collapsed py-3" data-bs-toggle={'collapse'} data-bs-parent={'#menu'}>
                            <img src={pin.src} alt="" className="icon-menu me-3"/>
                            <span className="me-auto">
                                Monitor
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </a>
                        <div id="monitor" className="accordion-collapse collapse block-bg mx-1" data-bs-parent='#menu'>
                            <Link href="/monitor/order" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={subTasks.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Running Order</span>
                            </Link>
                            <Link href="/monitor/forecast" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={resource.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>ForeCast</span>
                            </Link>
                            <Link href="/monitor/last-50-page" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={stackFrame.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Last 50 Page</span>
                            </Link>
                            <Link href="/monitor/onl-list" className="nav-link" style={{borderRadius: '10px'}}>
                                <img src={book.src} alt="" className="icon-menu mx-1 me-2"/>
                                <span>Online Player List</span>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="footer-bar w-100 px-3 pt-5 pb-2">
                <div className="bottom-banner text-center pt-3">
                    <img className="question-logo translate-middle" src={questionBlock.src}/>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-center">
                            <p>Need Help with WEWIN247</p><a className="btn btn-help" href="#">Go to
                            help center</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
