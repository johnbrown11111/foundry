import { useState, useEffect, useMemo } from "react";
import { ARCHIVE_ARTICLES, ARCHIVE_CATEGORIES } from "./archive";

const C = {
  bg: '#F7F4EF', bgAlt: '#EEE9E0', text: '#1C1C1A',
  mid: '#6B6760', light: '#A8A49E', accent: '#B8956A',
  accentBg: '#F0E4D0', border: '#E4DFD7', white: '#FFFFFF',
};

const INITIAL_PRODUCTS = [
  { id:1, name:"Ceramic Pour-Over Set", category:"Kitchen", price:68, originalPrice:null, description:"Hand-thrown stoneware pour-over set with smooth matte glaze. Each piece is unique, crafted by independent potters. Includes cone, stand, and matching mug.", stock:12, image:"https://picsum.photos/seed/ceramicpour/600/720" },
  { id:2, name:"French Linen Pillow Cover", category:"Home", price:45, originalPrice:60, description:"Pre-washed French linen pillow cover with an envelope closure. Softens beautifully over time. Natural and stone colorways available.", stock:24, image:"https://picsum.photos/seed/linencover/600/720" },
  { id:3, name:"Walnut Cutting Board", category:"Kitchen", price:85, originalPrice:null, description:"End-grain walnut cutting board with juice groove. Hand-sanded to 220 grit and finished with food-safe mineral oil. A lifetime piece.", stock:8, image:"https://picsum.photos/seed/walnutboard/600/720" },
  { id:4, name:"Merino Wool Throw", category:"Home", price:120, originalPrice:null, description:"Lightweight merino wool throw, woven in Portugal. Naturally temperature-regulating — warm without overheating. Comes in three earthy tones.", stock:15, image:"https://picsum.photos/seed/merinothrow/600/720" },
  { id:5, name:"Soy Wax Candle", category:"Home", price:32, originalPrice:null, description:"Hand-poured soy wax candle with cotton wick. Scented with cedarwood and vanilla. 45-hour burn time in a reusable vessel.", stock:30, image:"https://picsum.photos/seed/soycandle/600/720" },
  { id:6, name:"Full-Grain Leather Journal", category:"Stationery", price:55, originalPrice:null, description:"Full-grain leather journal with 192 pages of 100gsm acid-free paper. Lay-flat binding. Patinas beautifully with every year of use.", stock:20, image:"https://picsum.photos/seed/leatherjournal/600/720" },
  { id:7, name:"Glass Carafe Set", category:"Kitchen", price:48, originalPrice:65, description:"Borosilicate glass carafe with two handblown glasses. Dishwasher safe. Holds 1 litre. Modern, clean, and functional.", stock:10, image:"https://picsum.photos/seed/glasscarafe/600/720" },
  { id:8, name:"White Oak Desk Organizer", category:"Office", price:72, originalPrice:null, description:"Solid white oak desk organizer with compartments for pens, cards, and small items. Dovetail joinery, no hardware needed.", stock:6, image:"https://picsum.photos/seed/oakdesk/600/720" },
];

const CATEGORIES = ["All", "Kitchen", "Home", "Stationery", "Office"];
const EMPTY_NEW_PRODUCT = { name:'', category:'Kitchen', price:'', originalPrice:'', description:'', stock:'', image:'' };

const PAGE_TITLES = {
  shop: 'Foundry — Handcrafted Objects Made to Last',
  checkout: 'Checkout — Foundry',
  success: 'Order Confirmed — Foundry',
  admin: 'Admin — Foundry',
  mission: 'Our Mission — Foundry',
  about: 'About Foundry',
  contact: 'Contact — Foundry',
  archive: 'Archive — Foundry',
  guide: 'Archive — Foundry',
};

const css = `
  *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
  button{touch-action:manipulation;}
  .ws{font-family:'Outfit',sans-serif;color:${C.text};min-height:100vh;background:${C.bg};}

  /* NAV */
  .nav{display:flex;align-items:center;justify-content:space-between;padding:18px 48px;border-bottom:1px solid ${C.border};background:${C.bg};position:sticky;top:0;z-index:100;}
  .nav-logo{font-family:'Playfair Display',serif;font-size:22px;font-weight:400;letter-spacing:.06em;cursor:pointer;background:none;border:none;padding:0;color:${C.text};}
  .nav-desktop{display:flex;align-items:center;gap:28px;}
  .nav-mobile{display:none;align-items:center;gap:8px;}
  .nav-item{position:relative;}
  .nav-link{font-size:12px;font-weight:400;color:${C.mid};cursor:pointer;letter-spacing:.1em;text-transform:uppercase;transition:color .2s;display:flex;align-items:center;gap:5px;padding:6px 0;background:none;border:none;font-family:'Outfit',sans-serif;}
  .nav-link:hover{color:${C.text};}
  .nav-link .chevron{font-size:9px;transition:transform .2s;}
  .nav-item:hover .chevron{transform:rotate(180deg);}
  .dropdown{position:absolute;top:calc(100% + 2px);left:50%;transform:translateX(-50%);background:#fff;border:1px solid ${C.border};min-width:180px;opacity:0;pointer-events:none;transition:opacity .15s, transform .15s;transform:translateX(-50%) translateY(-3px);box-shadow:0 8px 32px rgba(0,0,0,.08);}
  .nav-item:hover .dropdown{opacity:1;pointer-events:all;transform:translateX(-50%) translateY(0);}
  .dropdown::before{content:'';position:absolute;top:-6px;left:50%;width:10px;height:10px;background:#fff;border-left:1px solid ${C.border};border-top:1px solid ${C.border};transform:translateX(-50%) rotate(45deg);}
  .drop-item{display:block;width:100%;padding:12px 20px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:${C.mid};cursor:pointer;transition:all .15s;border:none;border-bottom:1px solid ${C.border};white-space:nowrap;background:none;text-align:left;font-family:'Outfit',sans-serif;}
  .drop-item:last-child{border-bottom:none;}
  .drop-item:hover{background:${C.bgAlt};color:${C.text};}
  .cart-btn{display:flex;align-items:center;gap:8px;background:${C.text};color:#fff;border:none;padding:10px 22px;font-family:'Outfit',sans-serif;font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:background .2s;}
  .cart-btn:hover{background:${C.accent};}
  .cart-count{background:${C.accent};color:#fff;border-radius:50%;width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;}
  .hamburger{display:flex;flex-direction:column;justify-content:center;gap:5px;width:40px;height:40px;background:none;border:none;cursor:pointer;padding:9px;flex-shrink:0;}
  .hamburger span{display:block;width:22px;height:2px;background:${C.text};border-radius:1px;transition:transform .25s,opacity .2s;}
  .hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
  .hamburger.open span:nth-child(2){opacity:0;}
  .hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

  /* MOBILE MENU */
  .mob-menu{position:fixed;top:0;left:0;right:0;bottom:0;background:${C.bg};z-index:99;overflow-y:auto;padding:70px 28px 48px;transform:translateX(100%);transition:transform .3s cubic-bezier(.25,.46,.45,.94);visibility:hidden;}
  .mob-menu.open{transform:translateX(0);visibility:visible;}
  .mob-section{margin-bottom:32px;}
  .mob-label{display:block;font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:${C.light};padding-bottom:10px;border-bottom:1px solid ${C.border};margin-bottom:2px;}
  .mob-btn{display:block;width:100%;padding:16px 0;font-size:16px;font-weight:400;color:${C.text};background:none;border:none;border-bottom:1px solid ${C.border};text-align:left;font-family:'Outfit',sans-serif;cursor:pointer;}
  .mob-btn:last-child{border-bottom:none;}
  .mob-sub{display:block;width:100%;padding:13px 0 13px 18px;font-size:14px;color:${C.mid};background:none;border:none;border-bottom:1px solid ${C.border};text-align:left;font-family:'Outfit',sans-serif;cursor:pointer;}
  .mob-sub:last-child{border-bottom:none;}
  .mob-cart-btn{display:flex;align-items:center;gap:8px;background:${C.text};color:#fff;border:none;padding:9px 16px;font-family:'Outfit',sans-serif;font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;}

  /* HERO */
  .hero{position:relative;height:75vh;min-height:440px;display:flex;align-items:center;overflow:hidden;}
  .hero-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;}
  .hero-overlay{position:absolute;inset:0;background:linear-gradient(to bottom, rgba(0,0,0,.18) 0%, rgba(0,0,0,.48) 100%);z-index:1;}
  .hero-content{position:relative;z-index:2;padding:0 64px;max-width:700px;}
  .hero-label{font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-bottom:16px;}
  .hero-title{font-family:'Playfair Display',serif;font-size:clamp(42px,6vw,72px);font-weight:400;line-height:1.1;color:#fff;}
  .hero-title em{font-style:italic;color:rgba(255,255,255,.7);}
  .hero-cta{display:inline-block;margin-top:32px;background:#fff;color:${C.text};border:none;padding:15px 36px;font-family:'Outfit',sans-serif;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;transition:background .2s;}
  .hero-cta:hover{background:${C.accent};color:#fff;}
  @media(max-width:768px){.hero-content{padding:0 24px;}.hero{height:70vh;}}

  /* FOUNDRY BANNER */
  .foundry-banner{display:flex;align-items:center;gap:24px;padding:28px 48px;border-top:1px solid ${C.border};border-bottom:1px solid ${C.border};}
  .foundry-line{flex:1;height:1px;background:${C.border};}
  .foundry-text{font-family:'Playfair Display',serif;font-size:22px;font-weight:400;letter-spacing:.18em;text-transform:uppercase;color:${C.mid};white-space:nowrap;}

  /* CATEGORIES */
  .cats{padding:0 48px 36px;display:flex;gap:8px;flex-wrap:wrap;}
  .cat{padding:8px 20px;font-family:'Outfit',sans-serif;font-size:12px;font-weight:400;border:1px solid ${C.border};background:transparent;cursor:pointer;letter-spacing:.06em;text-transform:uppercase;transition:all .2s;color:${C.mid};}
  .cat.active,.cat:hover{background:${C.text};color:#fff;border-color:${C.text};}

  /* GRID */
  .grid{padding:0 48px 80px;display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:28px;}
  .card{cursor:pointer;}
  .card-img-wrap{position:relative;overflow:hidden;background:${C.bgAlt};aspect-ratio:3/4;margin-bottom:14px;}
  .card-img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s cubic-bezier(.25,.46,.45,.94);}
  .card:hover .card-img{transform:scale(1.04);}
  .card-overlay{position:absolute;inset:0;display:flex;align-items:flex-end;padding:16px;opacity:0;transition:opacity .3s;background:linear-gradient(transparent,rgba(0,0,0,.18));}
  .card:hover .card-overlay{opacity:1;}
  .quick-add{background:#fff;color:${C.text};border:none;padding:10px;font-family:'Outfit',sans-serif;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;width:100%;transition:background .2s;}
  .quick-add:hover{background:${C.accent};color:#fff;}
  .badge{position:absolute;top:10px;left:10px;background:${C.accent};color:#fff;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:4px 10px;}
  .sold-out-overlay{position:absolute;inset:0;background:rgba(250,250,247,.7);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${C.mid};}
  .card-cat{font-size:11px;color:${C.light};letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px;}
  .card-name{font-size:15px;font-weight:500;margin-bottom:6px;}
  .card-price{font-size:15px;}
  .price-orig{text-decoration:line-through;color:${C.light};margin-right:8px;font-size:13px;}

  /* DETAIL */
  .detail{display:grid;grid-template-columns:1fr 1fr;min-height:calc(100vh - 61px);}
  .detail-img-col{background:${C.bgAlt};overflow:hidden;}
  .detail-img{width:100%;height:100%;object-fit:cover;display:block;min-height:520px;}
  .detail-info{padding:60px 52px;display:flex;flex-direction:column;justify-content:center;max-width:500px;}
  .back{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:${C.mid};cursor:pointer;margin-bottom:28px;letter-spacing:.08em;text-transform:uppercase;transition:color .2s;background:none;border:none;font-family:'Outfit',sans-serif;padding:0;}
  .back:hover{color:${C.text};}
  .detail-cat{font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:${C.accent};margin-bottom:10px;}
  .detail-name{font-family:'Playfair Display',serif;font-size:clamp(26px,3vw,40px);font-weight:400;line-height:1.2;margin-bottom:16px;}
  .detail-price{font-size:26px;font-weight:300;margin-bottom:20px;}
  .detail-price .po{text-decoration:line-through;color:${C.light};font-size:18px;margin-right:10px;}
  .detail-desc{font-size:15px;line-height:1.75;color:${C.mid};margin-bottom:28px;}
  .detail-stock{font-size:12px;color:${C.light};letter-spacing:.06em;margin-bottom:20px;}
  .qty-row{display:flex;align-items:center;gap:14px;margin-bottom:0;}
  .qty-ctrl{display:flex;align-items:center;border:1px solid ${C.border};}
  .qty-btn{width:40px;height:44px;background:none;border:none;font-size:18px;cursor:pointer;color:${C.text};display:flex;align-items:center;justify-content:center;transition:background .15s;}
  .qty-btn:hover{background:${C.bgAlt};}
  .qty-val{width:48px;text-align:center;font-size:15px;font-weight:500;}
  .atc-btn{flex:1;background:${C.text};color:#fff;border:none;padding:14px;font-family:'Outfit',sans-serif;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:background .2s;}
  .atc-btn:hover{background:${C.accent};}

  /* CART DRAWER */
  .backdrop{position:fixed;inset:0;background:rgba(0,0,0,.3);z-index:200;opacity:0;transition:opacity .3s;pointer-events:none;}
  .backdrop.open{opacity:1;pointer-events:all;}
  .drawer{position:fixed;top:0;right:0;bottom:0;width:400px;max-width:95vw;background:#fff;z-index:201;display:flex;flex-direction:column;transform:translateX(100%);transition:transform .35s cubic-bezier(.25,.46,.45,.94);}
  .drawer.open{transform:translateX(0);}
  .drawer-head{display:flex;align-items:center;justify-content:space-between;padding:22px 26px;border-bottom:1px solid ${C.border};}
  .drawer-title{font-family:'Playfair Display',serif;font-size:20px;font-weight:400;}
  .drawer-close{background:none;border:none;font-size:22px;cursor:pointer;color:${C.mid};line-height:1;transition:color .2s;}
  .drawer-close:hover{color:${C.text};}
  .drawer-body{flex:1;overflow-y:auto;padding:18px 26px;}
  .empty-cart{display:flex;flex-direction:column;align-items:center;justify-content:center;height:200px;color:${C.light};font-size:14px;gap:10px;}
  .ci{display:grid;grid-template-columns:72px 1fr auto;gap:14px;padding:14px 0;border-bottom:1px solid ${C.border};align-items:start;}
  .ci-img{width:72px;height:88px;object-fit:cover;background:${C.bgAlt};}
  .ci-name{font-size:14px;font-weight:500;margin-bottom:3px;}
  .ci-price{font-size:13px;color:${C.mid};margin-bottom:9px;}
  .ci-qty{display:flex;align-items:center;gap:7px;}
  .cqb{width:24px;height:24px;border:1px solid ${C.border};background:none;cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;transition:all .15s;}
  .cqb:hover{border-color:${C.text};}
  .cqv{font-size:13px;width:22px;text-align:center;}
  .ci-del{background:none;border:none;cursor:pointer;color:${C.light};font-size:18px;transition:color .2s;padding-top:1px;}
  .ci-del:hover{color:#e44;}
  .drawer-foot{padding:18px 26px;border-top:1px solid ${C.border};}
  .subtotal{display:flex;justify-content:space-between;margin-bottom:14px;font-size:15px;}
  .subtotal span:last-child{font-weight:600;}
  .co-btn{width:100%;background:${C.text};color:#fff;border:none;padding:15px;font-family:'Outfit',sans-serif;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:background .2s;margin-bottom:10px;}
  .co-btn:hover{background:${C.accent};}
  .cs-btn{width:100%;background:none;border:1px solid ${C.border};padding:13px;font-family:'Outfit',sans-serif;font-size:12px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;color:${C.mid};transition:all .2s;}
  .cs-btn:hover{border-color:${C.text};color:${C.text};}

  /* CHECKOUT */
  .checkout{max-width:920px;margin:0 auto;padding:52px 48px;}
  .page-title{font-family:'Playfair Display',serif;font-size:38px;font-weight:400;margin-bottom:40px;}
  .co-grid{display:grid;grid-template-columns:1fr 360px;gap:48px;}
  .fsec{margin-bottom:28px;}
  .fsec-title{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${C.mid};margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid ${C.border};}
  .frow{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
  .fg{margin-bottom:14px;}
  .fl{display:block;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:${C.mid};margin-bottom:5px;}
  .fi{width:100%;padding:11px 13px;border:1px solid ${C.border};background:#fff;font-family:'Outfit',sans-serif;font-size:14px;color:${C.text};outline:none;transition:border-color .2s;}
  .fi:focus{border-color:${C.text};}
  select.fi{appearance:none;cursor:pointer;}
  .summary-box{background:${C.bgAlt};padding:26px;}
  .sum-title{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:18px;}
  .si{display:flex;gap:12px;margin-bottom:14px;}
  .si-img{width:56px;height:68px;object-fit:cover;background:${C.border};flex-shrink:0;}
  .si-name{font-size:13px;font-weight:500;margin-bottom:2px;}
  .si-qty{font-size:12px;color:${C.light};}
  .si-price{font-size:14px;font-weight:500;margin-left:auto;flex-shrink:0;}
  .sum-div{border:none;border-top:1px solid ${C.border};margin:14px 0;}
  .sum-total{display:flex;justify-content:space-between;font-size:15px;font-weight:700;margin-bottom:18px;}
  .po-btn{width:100%;background:${C.text};color:#fff;border:none;padding:15px;font-family:'Outfit',sans-serif;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:background .2s;}
  .po-btn:hover{background:${C.accent};}

  /* SUCCESS */
  .success{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:calc(100vh - 61px);padding:48px;text-align:center;}
  .suc-icon{width:60px;height:60px;border-radius:50%;background:${C.accent};color:#fff;display:flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:22px;}
  .suc-title{font-family:'Playfair Display',serif;font-size:44px;font-weight:400;margin-bottom:10px;}
  .suc-sub{font-size:16px;color:${C.mid};max-width:380px;line-height:1.65;margin-bottom:6px;}
  .suc-id{font-size:12px;color:${C.light};letter-spacing:.1em;margin-bottom:34px;}
  .suc-btn{background:${C.text};color:#fff;border:none;padding:14px 36px;font-family:'Outfit',sans-serif;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:background .2s;}
  .suc-btn:hover{background:${C.accent};}

  /* ADMIN */
  .admin{padding:40px 48px;}
  .admin-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;}
  .admin-tabs{display:flex;border-bottom:1px solid ${C.border};margin-bottom:28px;}
  .atab{padding:12px 22px;font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;border-bottom:2px solid transparent;color:${C.mid};transition:all .2s;}
  .atab.active{color:${C.text};border-bottom-color:${C.text};}
  .add-box{background:${C.bgAlt};padding:22px;margin-bottom:24px;}
  .add-box-title{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${C.mid};margin-bottom:14px;}
  .add-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:12px;}
  .tbl{width:100%;border-collapse:collapse;}
  .tbl th{text-align:left;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${C.mid};padding:10px 14px;border-bottom:1px solid ${C.border};}
  .tbl td{padding:13px 14px;border-bottom:1px solid ${C.border};font-size:14px;vertical-align:middle;}
  .tbl tr:hover td{background:${C.bgAlt};}
  .thumb{width:44px;height:55px;object-fit:cover;background:${C.bgAlt};}
  .acts{display:flex;gap:8px;}
  .bsm{padding:6px 12px;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;border:1px solid ${C.border};background:none;color:${C.mid};transition:all .2s;font-family:'Outfit',sans-serif;}
  .bsm:hover{border-color:${C.text};color:${C.text};}
  .bsm.del:hover{border-color:#e44;color:#e44;}
  .bprimary{background:${C.text};color:#fff;border:none;padding:11px 22px;font-family:'Outfit',sans-serif;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:background .2s;}
  .bprimary:hover{background:${C.accent};}
  .bprimary:disabled{opacity:.4;cursor:not-allowed;}
  .ocard{background:${C.bgAlt};padding:18px;margin-bottom:14px;}
  .ocard-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;}
  .oid{font-size:13px;font-weight:700;letter-spacing:.05em;}
  .odate{font-size:12px;color:${C.light};}
  .ostatus{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${C.accent};background:${C.accentBg};padding:3px 10px;}
  .oitems{font-size:13px;color:${C.mid};}

  /* MODAL */
  .mbackdrop{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:300;display:flex;align-items:center;justify-content:center;padding:24px;}
  .modal{background:#fff;width:100%;max-width:520px;max-height:90vh;overflow-y:auto;padding:36px;}
  .modal-title{font-family:'Playfair Display',serif;font-size:24px;font-weight:400;margin-bottom:24px;}
  .mrow{display:flex;gap:12px;margin-top:8px;}

  /* MISSION PAGE */
  .mission-page{min-height:calc(100vh - 61px);display:flex;align-items:center;justify-content:center;padding:80px 24px;background:${C.bg};}
  .mission-inner{max-width:520px;width:100%;text-align:center;border-left:1px solid ${C.border};border-right:1px solid ${C.border};padding:60px 48px;}
  .mission-label{font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.accent};margin-bottom:36px;}
  .mission-line{font-family:'Playfair Display',serif;font-style:italic;font-size:clamp(17px,2.2vw,22px);font-weight:400;line-height:2;color:${C.mid};display:block;margin-bottom:4px;}
  .mission-line.bold{color:${C.text};font-weight:500;}
  .mission-divider{width:40px;height:1px;background:${C.accent};margin:32px auto;}
  .mission-back{margin-top:40px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:${C.light};cursor:pointer;transition:color .2s;background:none;border:none;font-family:'Outfit',sans-serif;padding:0;}
  .mission-back:hover{color:${C.text};}

  /* ABOUT & CONTACT */
  .page-section{max-width:780px;margin:0 auto;padding:72px 48px;}
  .page-section h1{font-family:'Playfair Display',serif;font-size:clamp(32px,4vw,52px);font-weight:400;margin-bottom:24px;}
  .page-section p{font-size:16px;line-height:1.85;color:${C.mid};margin-bottom:20px;}
  .page-section h2{font-family:'Playfair Display',serif;font-size:22px;font-weight:400;margin:36px 0 12px;}
  .contact-form{margin-top:32px;}
  .contact-form .fg{margin-bottom:16px;}
  .contact-form textarea.fi{resize:vertical;min-height:130px;font-family:'Outfit',sans-serif;}
  .team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:32px;}
  .team-card{text-align:center;}
  .team-img{width:100%;aspect-ratio:1;object-fit:cover;background:${C.bgAlt};margin-bottom:12px;}
  .team-name{font-size:15px;font-weight:600;margin-bottom:4px;}
  .team-role{font-size:12px;color:${C.light};letter-spacing:.08em;text-transform:uppercase;}
  @media(max-width:768px){.page-section{padding:44px 20px;}.team-grid{grid-template-columns:1fr 1fr;}}

  /* FOOTER */
  .site-footer{border-top:1px solid ${C.border};padding:40px 48px;display:flex;flex-direction:column;gap:20px;background:${C.bg};}
  .footer-nav{display:flex;gap:28px;flex-wrap:wrap;margin-bottom:4px;}
  .footer-link{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:${C.mid};cursor:pointer;background:none;border:none;font-family:'Outfit',sans-serif;transition:color .2s;padding:0;}
  .footer-link:hover{color:${C.text};}
  .footer-bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;}
  .footer-copy{font-size:12px;color:${C.light};}
  .footer-contact{font-size:12px;color:${C.mid};font-style:normal;}
  .footer-contact a{color:inherit;text-decoration:none;}
  .footer-contact a:hover{color:${C.text};}

  .toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:${C.text};color:#fff;padding:12px 28px;font-size:13px;font-weight:500;letter-spacing:.05em;z-index:9999;animation:slideUp .3s ease;}
  @keyframes slideUp{from{transform:translateX(-50%) translateY(16px);opacity:0}to{transform:translateX(-50%) translateY(0);opacity:1}}

  /* SEARCH OVERLAY */
  .search-overlay{position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:500;overflow-y:auto;}
  .search-inner{max-width:860px;width:100%;margin:0 auto;padding:40px 48px 80px;}
  .search-bar{display:flex;align-items:center;gap:16px;margin-bottom:40px;padding-bottom:22px;border-bottom:1px solid rgba(255,255,255,.15);}
  .search-field{flex:1;background:none;border:none;outline:none;font-family:'Playfair Display',serif;font-size:clamp(22px,3.5vw,36px);font-weight:400;color:#fff;caret-color:${C.accent};}
  .search-field::placeholder{color:rgba(255,255,255,.28);}
  .search-x{background:none;border:none;cursor:pointer;color:rgba(255,255,255,.45);font-size:28px;line-height:1;transition:color .2s;padding:4px;flex-shrink:0;font-family:'Outfit',sans-serif;}
  .search-x:hover{color:#fff;}
  .search-section{margin-bottom:40px;}
  .search-section-label{display:block;font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.38);margin-bottom:14px;}
  .search-prod-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(155px,1fr));gap:12px;}
  .srch-prod{cursor:pointer;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);transition:background .2s;text-align:left;font-family:'Outfit',sans-serif;padding:0;width:100%;}
  .srch-prod:hover{background:rgba(255,255,255,.12);}
  .srch-prod-img{width:100%;aspect-ratio:3/4;object-fit:cover;display:block;opacity:.82;}
  .srch-prod-name{font-size:13px;font-weight:500;color:#fff;padding:8px 10px 2px;line-height:1.3;}
  .srch-prod-price{font-size:12px;color:rgba(255,255,255,.45);padding:0 10px 10px;}
  .search-art-list{display:flex;flex-direction:column;gap:10px;}
  .srch-art{display:flex;align-items:center;gap:14px;cursor:pointer;padding:12px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);transition:background .2s;text-align:left;font-family:'Outfit',sans-serif;width:100%;}
  .srch-art:hover{background:rgba(255,255,255,.12);}
  .srch-art-img{width:66px;height:44px;object-fit:cover;flex-shrink:0;opacity:.82;}
  .srch-art-cat{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${C.accent};margin-bottom:3px;}
  .srch-art-title{font-size:14px;color:#fff;font-weight:400;line-height:1.3;}
  .search-empty{font-size:15px;color:rgba(255,255,255,.35);padding:28px 0;}
  .search-btn{background:none;border:none;cursor:pointer;color:${C.mid};padding:6px;display:flex;align-items:center;transition:color .2s;line-height:0;}
  .search-btn:hover{color:${C.text};}

  /* ARCHIVE LANDING */
  .archive-pg{padding:64px 48px 100px;}
  .archive-pg-head{max-width:680px;margin-bottom:48px;}
  .archive-pg-label{font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${C.accent};margin-bottom:14px;}
  .archive-pg-title{font-family:'Playfair Display',serif;font-size:clamp(34px,4.5vw,58px);font-weight:400;line-height:1.08;margin-bottom:16px;}
  .archive-pg-sub{font-size:16px;color:${C.mid};line-height:1.7;}
  .archive-filter{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:52px;}
  .arc-feat{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-bottom:60px;border:1px solid ${C.border};cursor:pointer;overflow:hidden;}
  .arc-feat:hover .arc-feat-img{transform:scale(1.03);}
  .arc-feat-img-wrap{overflow:hidden;background:${C.bgAlt};}
  .arc-feat-img{width:100%;height:100%;object-fit:cover;display:block;min-height:380px;transition:transform .6s cubic-bezier(.25,.46,.45,.94);}
  .arc-feat-body{padding:48px 44px;display:flex;flex-direction:column;justify-content:center;background:${C.white};}
  .arc-feat-cat{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${C.accent};margin-bottom:14px;}
  .arc-feat-title{font-family:'Playfair Display',serif;font-size:clamp(22px,2.4vw,32px);font-weight:400;line-height:1.25;margin-bottom:14px;color:${C.text};}
  .arc-feat-sub{font-size:15px;color:${C.mid};line-height:1.65;margin-bottom:8px;}
  .arc-feat-meta{font-size:12px;color:${C.light};letter-spacing:.06em;}
  .arc-feat-link{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${C.text};margin-top:26px;transition:color .2s;background:none;border:none;font-family:'Outfit',sans-serif;cursor:pointer;padding:0;}
  .arc-feat-link:hover{color:${C.accent};}
  .archive-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;}
  .arc-card{cursor:pointer;border:1px solid ${C.border};overflow:hidden;background:${C.white};transition:border-color .25s;}
  .arc-card:hover{border-color:${C.mid};}
  .arc-card:hover .arc-card-img{transform:scale(1.04);}
  .arc-card-img-wrap{overflow:hidden;background:${C.bgAlt};aspect-ratio:3/2;}
  .arc-card-img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s cubic-bezier(.25,.46,.45,.94);}
  .arc-card-body{padding:22px 22px 26px;}
  .arc-cat-tag{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${C.accent};margin-bottom:9px;}
  .arc-title{font-family:'Playfair Display',serif;font-size:18px;font-weight:400;line-height:1.3;margin-bottom:8px;color:${C.text};}
  .arc-excerpt{font-size:13px;color:${C.mid};line-height:1.6;margin-bottom:12px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}
  .arc-meta{font-size:11px;color:${C.light};letter-spacing:.05em;}

  /* GUIDE PAGE */
  .guide-pg{min-height:calc(100vh - 61px);}
  .guide-hero{position:relative;height:68vh;min-height:400px;overflow:hidden;}
  .guide-hero-img{width:100%;height:100%;object-fit:cover;display:block;}
  .guide-hero-overlay{position:absolute;inset:0;background:linear-gradient(to bottom, rgba(0,0,0,.08) 0%, rgba(0,0,0,.6) 55%, rgba(0,0,0,.82) 100%);}
  .guide-hero-content{position:absolute;bottom:0;left:0;right:0;padding:0 80px 56px;max-width:900px;}
  .guide-breadcrumb{display:flex;align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:16px;}
  .guide-breadcrumb button{background:none;border:none;color:inherit;cursor:pointer;font-family:'Outfit',sans-serif;font-size:inherit;letter-spacing:inherit;text-transform:inherit;font-weight:inherit;padding:0;transition:color .2s;}
  .guide-breadcrumb button:hover{color:rgba(255,255,255,.9);}
  .guide-hero-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4.5vw,56px);font-weight:400;line-height:1.1;color:#fff;margin-bottom:12px;}
  .guide-hero-sub{font-size:16px;color:rgba(255,255,255,.68);line-height:1.55;max-width:620px;}
  .guide-hero-meta{font-size:12px;color:rgba(255,255,255,.4);letter-spacing:.06em;margin-top:16px;}
  .guide-body{max-width:700px;margin:0 auto;padding:64px 48px 72px;}
  .guide-lead{font-family:'Playfair Display',serif;font-size:clamp(18px,1.8vw,22px);font-weight:400;line-height:1.78;color:${C.text};margin-bottom:36px;}
  .guide-h2{font-family:'Playfair Display',serif;font-size:clamp(18px,2vw,26px);font-weight:400;color:${C.text};margin:44px 0 14px;}
  .guide-p{font-size:16px;line-height:1.88;color:${C.mid};margin-bottom:22px;}
  .guide-pullquote{border-left:2px solid ${C.accent};margin:36px 0;padding:0 0 0 28px;}
  .guide-pullquote p{font-family:'Playfair Display',serif;font-style:italic;font-size:clamp(17px,1.7vw,21px);line-height:1.68;color:${C.text};}
  .guide-tip{background:${C.accentBg};border-left:3px solid ${C.accent};padding:20px 24px;margin:28px 0;}
  .guide-tip-title{font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${C.accent};margin-bottom:7px;}
  .guide-tip-text{font-size:15px;line-height:1.65;color:${C.text};}
  .guide-list{list-style:none;padding:0;margin:0 0 24px 0;}
  .guide-list li{font-size:15px;color:${C.mid};line-height:1.72;padding:9px 0 9px 22px;border-bottom:1px solid ${C.border};position:relative;}
  .guide-list li::before{content:'—';position:absolute;left:0;color:${C.accent};}
  .guide-list li:last-child{border-bottom:none;}
  .guide-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:52px;padding-top:32px;border-top:1px solid ${C.border};}
  .guide-tag{display:inline-block;font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:${C.mid};border:1px solid ${C.border};padding:6px 14px;background:none;cursor:pointer;transition:all .2s;font-family:'Outfit',sans-serif;}
  .guide-tag:hover{border-color:${C.text};color:${C.text};}
  .guide-related{padding:0 48px 80px;max-width:1280px;margin:0 auto;}
  .guide-related-head{font-family:'Playfair Display',serif;font-size:24px;font-weight:400;margin-bottom:28px;padding-top:8px;border-top:1px solid ${C.border};}
  .guide-related-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:24px;}

  @media(max-width:768px){
    /* NAV */
    .nav{padding:12px 16px;}
    .nav-desktop{display:none;}
    .nav-mobile{display:flex;}

    /* HERO */
    .hero{height:58vh;min-height:320px;}
    .hero-content{padding:0 20px;}
    .hero-label{font-size:10px;}
    .hero-cta{padding:13px 28px;margin-top:24px;}

    /* CATEGORIES — horizontal scroll, no wrap */
    .cats{padding:0 16px 20px;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;gap:6px;}
    .cats::-webkit-scrollbar{display:none;}
    .cat{flex-shrink:0;padding:8px 16px;}

    /* PRODUCT GRID */
    .grid{padding:0 16px 56px;grid-template-columns:repeat(2,1fr);gap:12px;}
    .card-name{font-size:13px;}
    .card-price{font-size:13px;}

    /* PRODUCT DETAIL — image constrained, info below */
    .detail{grid-template-columns:1fr;}
    .detail-img{min-height:0;max-height:55vw;object-fit:cover;}
    .detail-info{padding:28px 20px;max-width:100%;}
    .detail-name{font-size:clamp(22px,6vw,32px);}
    .atc-btn{min-height:52px;font-size:13px;}

    /* CHECKOUT */
    .checkout{padding:28px 16px;}
    .co-grid{grid-template-columns:1fr;}
    .frow{grid-template-columns:1fr;}
    .fi{font-size:16px;padding:13px;}
    select.fi{font-size:16px;}

    /* CART DRAWER */
    .drawer{width:100%;max-width:100%;}

    /* ADMIN */
    .admin{padding:20px 16px;}
    .add-grid{grid-template-columns:1fr 1fr;}

    /* MISSION */
    .mission-inner{padding:40px 24px;border:none;border-top:1px solid ${C.border};border-bottom:1px solid ${C.border};}

    /* FOOTER */
    .site-footer{padding:28px 16px;}
    .footer-bottom{flex-direction:column;align-items:flex-start;}

    /* ARCHIVE */
    .archive-pg{padding:32px 16px 60px;}
    .archive-filter{flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding-bottom:4px;}
    .archive-filter::-webkit-scrollbar{display:none;}
    .archive-filter .cat{flex-shrink:0;}
    .arc-feat{grid-template-columns:1fr;}
    .arc-feat-img{min-height:220px;}
    .arc-feat-body{padding:28px 22px;}
    .archive-grid{grid-template-columns:1fr;gap:20px;}

    /* GUIDE */
    .guide-hero{height:56vw;min-height:260px;}
    .guide-hero-content{padding:0 20px 28px;}
    .guide-hero-sub{font-size:14px;}
    .guide-body{padding:36px 20px 56px;}
    .guide-related{padding:0 16px 56px;}
    .guide-pullquote{padding-left:18px;}

    /* SEARCH */
    .search-inner{padding:24px 20px 60px;}
    .search-prod-grid{grid-template-columns:repeat(2,1fr);}
  }
`;

export default function App() {
  const [page, setPage] = useState("shop");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [lastOrder, setLastOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState(null);
  const [adminTab, setAdminTab] = useState("products");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [newProd, setNewProd] = useState(EMPTY_NEW_PRODUCT);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [archiveCategory, setArchiveCategory] = useState('All');
  const [checkoutData, setCheckoutData] = useState({
    email:"", firstName:"", lastName:"", address:"", city:"", zip:"",
    cardNumber:"", cardExpiry:"", cardCVC:"",
  });

  const notify = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2400);
  };

  useEffect(() => {
    (async () => {
      try {
        const p = await window.storage.get('ws2-products');
        setProducts(p ? JSON.parse(p.value) : INITIAL_PRODUCTS);
        if (!p) await window.storage.set('ws2-products', JSON.stringify(INITIAL_PRODUCTS));
      } catch { setProducts(INITIAL_PRODUCTS); }
      try {
        const c = await window.storage.get('ws2-cart');
        if (c) setCart(JSON.parse(c.value));
      } catch {}
      try {
        const o = await window.storage.get('ws2-orders');
        if (o) setOrders(JSON.parse(o.value));
      } catch {}
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (page === 'product' && selectedProduct) {
      document.title = `${selectedProduct.name} — Foundry`;
    } else if (page === 'guide' && selectedArticle) {
      document.title = `${selectedArticle.title} — Foundry`;
    } else {
      document.title = PAGE_TITLES[page] || 'Foundry';
    }
  }, [page, selectedProduct, selectedArticle]);

  const searchResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (q.length < 2) return { products: [], articles: [] };
    return {
      products: products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      ),
      articles: ARCHIVE_ARTICLES.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.subtitle.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.tags.some(t => t.toLowerCase().includes(q))
      ),
    };
  }, [searchQuery, products]);

  const filteredArticles = useMemo(() =>
    archiveCategory === 'All' ? ARCHIVE_ARTICLES : ARCHIVE_ARTICLES.filter(a => a.category === archiveCategory),
  [archiveCategory]);

  useEffect(() => {
    document.body.style.overflow = (mobileMenuOpen || searchOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen, searchOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setSearchOpen(false); setSearchQuery(''); } };
    if (searchOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [searchOpen]);

  const saveCart = async (nc) => {
    setCart(nc);
    try { await window.storage.set('ws2-cart', JSON.stringify(nc)); } catch {}
  };

  const saveProducts = async (np) => {
    setProducts(np);
    try { await window.storage.set('ws2-products', JSON.stringify(np)); } catch {}
  };

  const saveOrders = async (no) => {
    setOrders(no);
    try { await window.storage.set('ws2-orders', JSON.stringify(no)); } catch {}
  };

  const addToCart = (product, quantity = 1) => {
    const exists = cart.find(i => i.id === product.id);
    const nc = exists
      ? cart.map(i => i.id === product.id ? { ...i, qty: i.qty + quantity } : i)
      : [...cart, { ...product, qty: quantity }];
    saveCart(nc);
    notify("Added to cart ✓");
  };

  const updateQty = (id, q) => q < 1 ? saveCart(cart.filter(i => i.id !== id)) : saveCart(cart.map(i => i.id === id ? { ...i, qty: q } : i));
  const removeItem = (id) => saveCart(cart.filter(i => i.id !== id));

  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const placeOrder = () => {
    const order = { id: Date.now(), items: [...cart], total: cartTotal, date: new Date().toISOString(), customer: checkoutData, status: "Processing" };
    const no = [order, ...orders];
    saveOrders(no);
    setLastOrder(order);
    saveCart([]);
    setPage("success");
  };

  const filteredProducts = category === "All" ? products : products.filter(p => p.category === category);

  const goTo = (newPage, newCat = null) => {
    setPage(newPage);
    if (newCat) setCategory(newCat);
    setMobileMenuOpen(false);
  };

  const handleAddProduct = async () => {
    const p = {
      ...newProd, id: Date.now(),
      price: parseFloat(newProd.price) || 0,
      stock: parseInt(newProd.stock) || 0,
      originalPrice: newProd.originalPrice ? parseFloat(newProd.originalPrice) : null,
      image: newProd.image || `https://picsum.photos/seed/${Date.now()}/600/720`,
    };
    await saveProducts([...products, p]);
    setNewProd(EMPTY_NEW_PRODUCT);
    notify("Product added");
  };

  const handleDeleteProduct = async (id) => {
    await saveProducts(products.filter(p => p.id !== id));
    notify("Product deleted");
  };

  const handleSaveEdit = async () => {
    await saveProducts(products.map(p => p.id === editProduct.id ? { ...editProduct, price: parseFloat(editProduct.price)||0, stock: parseInt(editProduct.stock)||0 } : p));
    setEditProduct(null);
    notify("Product updated");
  };

  if (loading) return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', fontFamily:'Outfit,sans-serif', color: C.mid, fontSize:'14px' }}>
      Loading…
    </div>
  );

  return (
    <div className="ws">
      <style>{css}</style>

      {/* Dynamic JSON-LD for product listing */}
      {page === 'shop' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": category === 'All' ? "Foundry Product Catalog" : `Foundry ${category} Collection`,
            "description": "Handcrafted homeware and objects made to last",
            "numberOfItems": filteredProducts.length,
            "itemListElement": filteredProducts.map((p, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "Product",
                "name": p.name,
                "description": p.description,
                "category": p.category,
                "image": p.image,
                "offers": {
                  "@type": "Offer",
                  "price": p.price.toString(),
                  "priceCurrency": "USD",
                  "availability": p.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
                }
              }
            }))
          })}}
        />
      )}

      {/* Dynamic JSON-LD for product detail */}
      {page === 'product' && selectedProduct && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": selectedProduct.name,
            "description": selectedProduct.description,
            "category": selectedProduct.category,
            "image": selectedProduct.image,
            "offers": {
              "@type": "Offer",
              "price": selectedProduct.price.toString(),
              "priceCurrency": "USD",
              "availability": selectedProduct.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
              "seller": { "@type": "Organization", "name": "Foundry" }
            }
          })}}
        />
      )}

      {/* SITE HEADER */}
      <header>
        <nav className="nav" aria-label="Main navigation">
          <button className="nav-logo" onClick={() => goTo("shop")} aria-label="Foundry — go to shop">Foundry</button>

          {/* Desktop navigation */}
          <div className="nav-desktop">
            <div className="nav-item">
              <button className="nav-link" onClick={() => setPage("shop")}>Shop <span className="chevron" aria-hidden="true">▾</span></button>
              <div className="dropdown">
                <button className="drop-item" onClick={() => { setPage("shop"); setCategory("All"); }}>All Products</button>
                <button className="drop-item" onClick={() => { setPage("shop"); setCategory("Kitchen"); }}>Kitchen</button>
                <button className="drop-item" onClick={() => { setPage("shop"); setCategory("Home"); }}>Home</button>
                <button className="drop-item" onClick={() => { setPage("shop"); setCategory("Stationery"); }}>Stationery</button>
                <button className="drop-item" onClick={() => { setPage("shop"); setCategory("Office"); }}>Office</button>
              </div>
            </div>
            <div className="nav-item">
              <button className="nav-link" onClick={() => setPage("about")}>About Us <span className="chevron" aria-hidden="true">▾</span></button>
              <div className="dropdown">
                <button className="drop-item" onClick={() => setPage("mission")}>Mission</button>
                <button className="drop-item" onClick={() => setPage("about")}>Partnerships</button>
                <button className="drop-item" onClick={() => setPage("about")}>Goals</button>
                <button className="drop-item" onClick={() => setPage("about")}>Results</button>
              </div>
            </div>
            <div className="nav-item">
              <button className="nav-link" onClick={() => setPage("contact")}>Contact <span className="chevron" aria-hidden="true">▾</span></button>
              <div className="dropdown">
                <button className="drop-item" onClick={() => setPage("contact")}>Send a Message</button>
                <button className="drop-item" onClick={() => setPage("contact")}>Support</button>
                <button className="drop-item" onClick={() => setPage("contact")}>Wholesale</button>
              </div>
            </div>
            <div className="nav-item">
              <button className="nav-link" onClick={() => goTo("archive")}>Archive <span className="chevron" aria-hidden="true">▾</span></button>
              <div className="dropdown">
                <button className="drop-item" onClick={() => { setArchiveCategory("All"); goTo("archive"); }}>All Articles</button>
                <button className="drop-item" onClick={() => { setArchiveCategory("Materials"); goTo("archive"); }}>Materials</button>
                <button className="drop-item" onClick={() => { setArchiveCategory("Designers"); goTo("archive"); }}>Designers</button>
                <button className="drop-item" onClick={() => { setArchiveCategory("Design Movements"); goTo("archive"); }}>Design Movements</button>
                <button className="drop-item" onClick={() => { setArchiveCategory("Buying Guides"); goTo("archive"); }}>Buying Guides</button>
                <button className="drop-item" onClick={() => { setArchiveCategory("Care & Restoration"); goTo("archive"); }}>Care & Restoration</button>
              </div>
            </div>
            <div className="nav-item">
              <button className="nav-link" onClick={() => setPage("admin")}>Admin</button>
            </div>
            <button className="search-btn" onClick={() => setSearchOpen(true)} aria-label="Search site">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
            <button className="cart-btn" onClick={() => setCartOpen(true)} aria-label={`Open cart, ${cartCount} item${cartCount !== 1 ? 's' : ''}`}>
              Cart {cartCount > 0 && <span className="cart-count" aria-hidden="true">{cartCount}</span>}
            </button>
          </div>

          {/* Mobile: search + cart + hamburger */}
          <div className="nav-mobile">
            <button className="search-btn" onClick={() => setSearchOpen(true)} aria-label="Search site" style={{color:C.text}}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
            <button className="mob-cart-btn" onClick={() => setCartOpen(true)} aria-label={`Open cart, ${cartCount} item${cartCount !== 1 ? 's' : ''}`}>
              Cart {cartCount > 0 && <span className="cart-count" aria-hidden="true">{cartCount}</span>}
            </button>
            <button
              className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(m => !m)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </nav>

        {/* Mobile slide-in menu */}
        <div className={`mob-menu ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
          <div className="mob-section">
            <span className="mob-label">Shop</span>
            <button className="mob-btn" onClick={() => goTo("shop", "All")}>All Products</button>
            <button className="mob-sub" onClick={() => goTo("shop", "Kitchen")}>Kitchen</button>
            <button className="mob-sub" onClick={() => goTo("shop", "Home")}>Home</button>
            <button className="mob-sub" onClick={() => goTo("shop", "Stationery")}>Stationery</button>
            <button className="mob-sub" onClick={() => goTo("shop", "Office")}>Office</button>
          </div>
          <div className="mob-section">
            <span className="mob-label">Archive</span>
            <button className="mob-btn" onClick={() => { setArchiveCategory("All"); goTo("archive"); }}>All Articles</button>
            <button className="mob-sub" onClick={() => { setArchiveCategory("Materials"); goTo("archive"); }}>Materials</button>
            <button className="mob-sub" onClick={() => { setArchiveCategory("Designers"); goTo("archive"); }}>Designers</button>
            <button className="mob-sub" onClick={() => { setArchiveCategory("Design Movements"); goTo("archive"); }}>Design Movements</button>
            <button className="mob-sub" onClick={() => { setArchiveCategory("Buying Guides"); goTo("archive"); }}>Buying Guides</button>
            <button className="mob-sub" onClick={() => { setArchiveCategory("Care & Restoration"); goTo("archive"); }}>Care & Restoration</button>
          </div>
          <div className="mob-section">
            <span className="mob-label">Company</span>
            <button className="mob-btn" onClick={() => goTo("about")}>About Us</button>
            <button className="mob-btn" onClick={() => goTo("mission")}>Mission</button>
            <button className="mob-btn" onClick={() => goTo("contact")}>Contact</button>
            <button className="mob-btn" onClick={() => goTo("admin")}>Admin</button>
          </div>
        </div>
      </header>

      {/* CART DRAWER */}
      <div className={`backdrop ${cartOpen ? 'open' : ''}`} onClick={() => setCartOpen(false)} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`drawer ${cartOpen ? 'open' : ''}`}
      >
        <div className="drawer-head">
          <span className="drawer-title">Your Cart</span>
          <button className="drawer-close" onClick={() => setCartOpen(false)} aria-label="Close cart">×</button>
        </div>
        <div className="drawer-body">
          {cart.length === 0
            ? <div className="empty-cart"><span aria-hidden="true" style={{fontSize:30}}>◯</span><span>Your cart is empty</span></div>
            : cart.map(item => (
              <div key={item.id} className="ci">
                <img src={item.image} alt={item.name} className="ci-img" />
                <div>
                  <div className="ci-name">{item.name}</div>
                  <div className="ci-price">${item.price}</div>
                  <div className="ci-qty">
                    <button className="cqb" onClick={() => updateQty(item.id, item.qty - 1)} aria-label={`Decrease quantity of ${item.name}`}>−</button>
                    <span className="cqv" aria-label={`Quantity: ${item.qty}`}>{item.qty}</span>
                    <button className="cqb" onClick={() => updateQty(item.id, item.qty + 1)} aria-label={`Increase quantity of ${item.name}`}>+</button>
                  </div>
                </div>
                <button className="ci-del" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name} from cart`}>×</button>
              </div>
            ))}
        </div>
        {cart.length > 0 && (
          <div className="drawer-foot">
            <div className="subtotal"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
            <button className="co-btn" onClick={() => { setCartOpen(false); setPage("checkout"); }}>Checkout</button>
            <button className="cs-btn" onClick={() => setCartOpen(false)}>Continue Shopping</button>
          </div>
        )}
      </div>

      {/* SEARCH OVERLAY */}
      {searchOpen && (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Site search">
          <div className="search-inner">
            <div className="search-bar">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                className="search-field"
                type="search"
                placeholder="Search products and articles…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                autoFocus
                aria-label="Search query"
              />
              <button className="search-x" onClick={() => { setSearchOpen(false); setSearchQuery(''); }} aria-label="Close search">×</button>
            </div>

            {searchQuery.trim().length >= 2 ? (
              <>
                {searchResults.products.length > 0 && (
                  <div className="search-section">
                    <span className="search-section-label">Products — {searchResults.products.length} result{searchResults.products.length !== 1 ? 's' : ''}</span>
                    <div className="search-prod-grid">
                      {searchResults.products.map(p => (
                        <button key={p.id} className="srch-prod" onClick={() => { setSelectedProduct(p); setQty(1); setPage('product'); setSearchOpen(false); setSearchQuery(''); }}>
                          <img src={p.image} alt={p.name} className="srch-prod-img" loading="lazy" />
                          <div className="srch-prod-name">{p.name}</div>
                          <div className="srch-prod-price">${p.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {searchResults.articles.length > 0 && (
                  <div className="search-section">
                    <span className="search-section-label">Archive — {searchResults.articles.length} article{searchResults.articles.length !== 1 ? 's' : ''}</span>
                    <div className="search-art-list">
                      {searchResults.articles.map(a => (
                        <button key={a.id} className="srch-art" onClick={() => { setSelectedArticle(a); setPage('guide'); setSearchOpen(false); setSearchQuery(''); }}>
                          <img src={a.image} alt={a.title} className="srch-art-img" loading="lazy" />
                          <div>
                            <div className="srch-art-cat">{a.category}</div>
                            <div className="srch-art-title">{a.title}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {searchResults.products.length === 0 && searchResults.articles.length === 0 && (
                  <p className="search-empty">No results for "{searchQuery}" — try another term.</p>
                )}
              </>
            ) : (
              <p className="search-empty">Start typing to search products and archive articles…</p>
            )}
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main id="main-content">

        {/* SHOP PAGE */}
        {page === "shop" && (
          <>
            <section className="hero" aria-labelledby="hero-heading">
              <video
                className="hero-video"
                src="/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
              <div className="hero-overlay" aria-hidden="true" />
              <div className="hero-content">
                <p className="hero-label">Spring Collection — 2025</p>
                <h1 id="hero-heading" className="hero-title">Objects made to <em>last</em></h1>
                <button className="hero-cta" onClick={() => document.querySelector('.cats')?.scrollIntoView({behavior:'smooth'})}>
                  Shop Now
                </button>
              </div>
            </section>

            <div className="foundry-banner" aria-hidden="true">
              <div className="foundry-line" />
              <span className="foundry-text">The Foundry</span>
              <div className="foundry-line" />
            </div>

            <nav className="cats" aria-label="Filter by category">
              {CATEGORIES.map(c => (
                <button key={c} className={`cat ${category === c ? 'active' : ''}`} onClick={() => setCategory(c)} aria-pressed={category === c}>{c}</button>
              ))}
            </nav>

            <section className="grid" aria-label={`${category === 'All' ? 'All products' : category + ' products'} — ${filteredProducts.length} items`}>
              {filteredProducts.map(p => (
                <article key={p.id} className="card" onClick={() => { setSelectedProduct(p); setQty(1); setPage("product"); }}>
                  <div className="card-img-wrap">
                    <img src={p.image} alt={p.name} className="card-img" loading="lazy" width="600" height="720" />
                    {p.originalPrice && <div className="badge" aria-label="On sale">Sale</div>}
                    {p.stock === 0 && <div className="sold-out-overlay" aria-label="Sold out">Sold Out</div>}
                    <div className="card-overlay">
                      <button className="quick-add" onClick={e => { e.stopPropagation(); if (p.stock > 0) addToCart(p); }} aria-label={p.stock > 0 ? `Quick add ${p.name} to cart` : `${p.name} is sold out`}>
                        {p.stock > 0 ? 'Quick Add' : 'Sold Out'}
                      </button>
                    </div>
                  </div>
                  <p className="card-cat">{p.category}</p>
                  <h2 className="card-name">{p.name}</h2>
                  <p className="card-price">
                    {p.originalPrice && <span className="price-orig" aria-label={`Original price $${p.originalPrice}`}>${p.originalPrice}</span>}
                    <span aria-label={`Price $${p.price}`}>${p.price}</span>
                  </p>
                </article>
              ))}
            </section>
          </>
        )}

        {/* PRODUCT DETAIL */}
        {page === "product" && selectedProduct && (() => {
          const p = selectedProduct;
          return (
            <article className="detail" itemScope itemType="https://schema.org/Product">
              <div className="detail-img-col">
                <img src={p.image} alt={p.name} className="detail-img" itemProp="image" />
              </div>
              <div className="detail-info">
                <button className="back" onClick={() => setPage("shop")}>← Back to Shop</button>
                <p className="detail-cat" itemProp="category">{p.category}</p>
                <h1 className="detail-name" itemProp="name">{p.name}</h1>
                <div className="detail-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  {p.originalPrice && <span className="po" aria-label={`Original price $${p.originalPrice}`}>${p.originalPrice}</span>}
                  <span itemProp="price" content={p.price}>${p.price}</span>
                  <meta itemProp="priceCurrency" content="USD" />
                  <meta itemProp="availability" content={p.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"} />
                </div>
                <p className="detail-desc" itemProp="description">{p.description}</p>
                <p className="detail-stock">{p.stock > 0 ? `${p.stock} in stock` : 'Out of stock'}</p>
                {p.stock > 0 && (
                  <div className="qty-row">
                    <div className="qty-ctrl" role="group" aria-label="Quantity">
                      <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
                      <span className="qty-val" aria-live="polite" aria-label={`Quantity: ${qty}`}>{qty}</span>
                      <button className="qty-btn" onClick={() => setQty(q => Math.min(p.stock, q + 1))} aria-label="Increase quantity">+</button>
                    </div>
                    <button className="atc-btn" onClick={() => { addToCart(p, qty); setCartOpen(true); }}>Add to Cart</button>
                  </div>
                )}
              </div>
            </article>
          );
        })()}

        {/* CHECKOUT */}
        {page === "checkout" && (
          <section className="checkout">
            <h1 className="page-title">Checkout</h1>
            <div className="co-grid">
              <div>
                <fieldset className="fsec" style={{border:'none',padding:0}}>
                  <legend className="fsec-title">Contact</legend>
                  <div className="fg">
                    <label className="fl" htmlFor="co-email">Email</label>
                    <input id="co-email" className="fi" type="email" value={checkoutData.email} onChange={e => setCheckoutData({...checkoutData, email:e.target.value})} placeholder="your@email.com" autoComplete="email" />
                  </div>
                </fieldset>
                <fieldset className="fsec" style={{border:'none',padding:0}}>
                  <legend className="fsec-title">Shipping Address</legend>
                  <div className="frow">
                    <div className="fg"><label className="fl" htmlFor="co-fname">First Name</label><input id="co-fname" className="fi" value={checkoutData.firstName} onChange={e => setCheckoutData({...checkoutData, firstName:e.target.value})} autoComplete="given-name" /></div>
                    <div className="fg"><label className="fl" htmlFor="co-lname">Last Name</label><input id="co-lname" className="fi" value={checkoutData.lastName} onChange={e => setCheckoutData({...checkoutData, lastName:e.target.value})} autoComplete="family-name" /></div>
                  </div>
                  <div className="fg"><label className="fl" htmlFor="co-addr">Street Address</label><input id="co-addr" className="fi" value={checkoutData.address} onChange={e => setCheckoutData({...checkoutData, address:e.target.value})} autoComplete="street-address" /></div>
                  <div className="frow">
                    <div className="fg"><label className="fl" htmlFor="co-city">City</label><input id="co-city" className="fi" value={checkoutData.city} onChange={e => setCheckoutData({...checkoutData, city:e.target.value})} autoComplete="address-level2" /></div>
                    <div className="fg"><label className="fl" htmlFor="co-zip">ZIP Code</label><input id="co-zip" className="fi" value={checkoutData.zip} onChange={e => setCheckoutData({...checkoutData, zip:e.target.value})} autoComplete="postal-code" /></div>
                  </div>
                </fieldset>
                <fieldset className="fsec" style={{border:'none',padding:0}}>
                  <legend className="fsec-title">Payment</legend>
                  <div className="fg"><label className="fl" htmlFor="co-card">Card Number</label><input id="co-card" className="fi" value={checkoutData.cardNumber} onChange={e => setCheckoutData({...checkoutData, cardNumber:e.target.value})} placeholder="1234 5678 9012 3456" maxLength={19} autoComplete="cc-number" /></div>
                  <div className="frow">
                    <div className="fg"><label className="fl" htmlFor="co-expiry">Expiry</label><input id="co-expiry" className="fi" value={checkoutData.cardExpiry} onChange={e => setCheckoutData({...checkoutData, cardExpiry:e.target.value})} placeholder="MM / YY" maxLength={7} autoComplete="cc-exp" /></div>
                    <div className="fg"><label className="fl" htmlFor="co-cvc">CVC</label><input id="co-cvc" className="fi" value={checkoutData.cardCVC} onChange={e => setCheckoutData({...checkoutData, cardCVC:e.target.value})} placeholder="123" maxLength={3} autoComplete="cc-csc" /></div>
                  </div>
                </fieldset>
              </div>
              <aside>
                <div className="summary-box">
                  <h2 className="sum-title">Order Summary</h2>
                  {cart.map(item => (
                    <div key={item.id} className="si">
                      <img src={item.image} alt={item.name} className="si-img" />
                      <div>
                        <div className="si-name">{item.name}</div>
                        <div className="si-qty">Qty: {item.qty}</div>
                      </div>
                      <div className="si-price">${(item.price * item.qty).toFixed(2)}</div>
                    </div>
                  ))}
                  <hr className="sum-div" />
                  <div className="sum-total"><span>Total</span><span>${cartTotal.toFixed(2)}</span></div>
                  <button className="po-btn" onClick={placeOrder}>Place Order</button>
                </div>
              </aside>
            </div>
          </section>
        )}

        {/* SUCCESS */}
        {page === "success" && (
          <section className="success">
            <div className="suc-icon" aria-hidden="true">✓</div>
            <h1 className="suc-title">Order placed!</h1>
            <p className="suc-sub">Thank you. We'll send a confirmation to {lastOrder?.customer?.email || 'your email'}.</p>
            <p className="suc-id">Order #{lastOrder?.id}</p>
            <button className="suc-btn" onClick={() => setPage("shop")}>Continue Shopping</button>
          </section>
        )}

        {/* ADMIN */}
        {page === "admin" && (
          <section className="admin">
            <div className="admin-head">
              <h1 className="page-title" style={{marginBottom:0}}>Admin Panel</h1>
            </div>
            <div className="admin-tabs" role="tablist">
              {['products', 'orders'].map(t => (
                <div key={t} role="tab" aria-selected={adminTab === t} className={`atab ${adminTab === t ? 'active' : ''}`} onClick={() => setAdminTab(t)}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                  {t === 'orders' && orders.length > 0 && (
                    <span style={{marginLeft:6, background:C.accent, color:'#fff', borderRadius:'10px', padding:'1px 7px', fontSize:10, fontWeight:700}}>{orders.length}</span>
                  )}
                </div>
              ))}
            </div>

            {adminTab === 'products' && (
              <>
                <div className="add-box">
                  <div className="add-box-title">Add New Product</div>
                  <div className="add-grid">
                    <div className="fg" style={{margin:0}}><label className="fl">Name *</label><input className="fi" value={newProd.name} onChange={e => setNewProd({...newProd, name:e.target.value})} /></div>
                    <div className="fg" style={{margin:0}}><label className="fl">Category</label>
                      <select className="fi" value={newProd.category} onChange={e => setNewProd({...newProd, category:e.target.value})}>
                        {['Kitchen','Home','Stationery','Office'].map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="fg" style={{margin:0}}><label className="fl">Price ($) *</label><input className="fi" type="number" value={newProd.price} onChange={e => setNewProd({...newProd, price:e.target.value})} /></div>
                    <div className="fg" style={{margin:0}}><label className="fl">Stock</label><input className="fi" type="number" value={newProd.stock} onChange={e => setNewProd({...newProd, stock:e.target.value})} /></div>
                    <div className="fg" style={{margin:0}}><label className="fl">Original Price ($)</label><input className="fi" type="number" value={newProd.originalPrice} onChange={e => setNewProd({...newProd, originalPrice:e.target.value})} placeholder="For sale badge" /></div>
                    <div className="fg" style={{margin:0}}><label className="fl">Image URL</label><input className="fi" value={newProd.image} onChange={e => setNewProd({...newProd, image:e.target.value})} placeholder="Auto-generated if blank" /></div>
                  </div>
                  <div className="fg"><label className="fl">Description</label><input className="fi" value={newProd.description} onChange={e => setNewProd({...newProd, description:e.target.value})} /></div>
                  <button className="bprimary" onClick={handleAddProduct} disabled={!newProd.name || !newProd.price}>Add Product</button>
                </div>

                <table className="tbl">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Product</th>
                      <th scope="col">Category</th>
                      <th scope="col">Price</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(p => (
                      <tr key={p.id}>
                        <td><img src={p.image} alt={p.name} className="thumb" /></td>
                        <td style={{fontWeight:500}}>{p.name}</td>
                        <td style={{color:C.mid}}>{p.category}</td>
                        <td>${p.price}</td>
                        <td>{p.stock}</td>
                        <td>
                          <div className="acts">
                            <button className="bsm" onClick={() => setEditProduct({...p, price:String(p.price), stock:String(p.stock)})}>Edit</button>
                            <button className="bsm del" onClick={() => handleDeleteProduct(p.id)}>Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {adminTab === 'orders' && (
              <div>
                {orders.length === 0
                  ? <p style={{color:C.light, fontSize:14}}>No orders yet.</p>
                  : orders.map(o => (
                    <div key={o.id} className="ocard">
                      <div className="ocard-head">
                        <div>
                          <div className="oid">#{o.id}</div>
                          <div className="odate">{new Date(o.date).toLocaleDateString()} · {o.customer.firstName} {o.customer.lastName}</div>
                        </div>
                        <div style={{textAlign:'right'}}>
                          <div className="ostatus">{o.status}</div>
                          <div style={{fontSize:15, fontWeight:700, marginTop:4}}>${o.total.toFixed(2)}</div>
                        </div>
                      </div>
                      <div className="oitems">{o.items.map(i => `${i.name} ×${i.qty}`).join(', ')}</div>
                    </div>
                  ))}
              </div>
            )}

            {/* EDIT MODAL */}
            {editProduct && (
              <div className="mbackdrop" onClick={() => setEditProduct(null)} role="dialog" aria-modal="true" aria-label="Edit product">
                <div className="modal" onClick={e => e.stopPropagation()}>
                  <h2 className="modal-title">Edit Product</h2>
                  {['name','price','stock','description'].map(field => (
                    <div key={field} className="fg">
                      <label className="fl">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                      <input className="fi" value={editProduct[field] || ''} onChange={e => setEditProduct({...editProduct, [field]: e.target.value})} />
                    </div>
                  ))}
                  <div className="mrow">
                    <button className="bprimary" onClick={handleSaveEdit}>Save Changes</button>
                    <button className="bsm" onClick={() => setEditProduct(null)}>Cancel</button>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* MISSION PAGE */}
        {page === "mission" && (
          <section className="mission-page">
            <div className="mission-inner">
              <p className="mission-label">Our Mission</p>
              <span className="mission-line bold">We believe in the enduring power</span>
              <span className="mission-line">of great design.</span>
              <div className="mission-divider" aria-hidden="true" />
              <span className="mission-line">Our gallery offers a curated collection</span>
              <span className="mission-line">of pre-loved masterpieces,</span>
              <span className="mission-line">each piece chosen for its quality,</span>
              <span className="mission-line">authenticity,</span>
              <span className="mission-line">and lasting aesthetic value.</span>
              <div className="mission-divider" aria-hidden="true" />
              <span className="mission-line bold">Empowering you to elevate your space</span>
              <span className="mission-line">with intentional design.</span>
              <span className="mission-line">We source and present exceptional</span>
              <span className="mission-line">second-hand design,</span>
              <span className="mission-line">bringing timeless craftsmanship</span>
              <span className="mission-line">into the modern home.</span>
              <button className="mission-back" onClick={() => setPage("about")}>← Back to About</button>
            </div>
          </section>
        )}

        {/* ABOUT US */}
        {page === "about" && (
          <article className="page-section">
            <h1>About Foundry</h1>
            <p>Foundry was born out of a simple belief: the objects we live with every day should be made to last. We source directly from independent makers and small workshops across Europe — people who still care deeply about craft, material, and process.</p>
            <p>Every product in our collection is chosen by hand. We visit the makers, understand their methods, and only carry things we'd be proud to have in our own homes. No fast production runs, no shortcuts.</p>
            <h2>Our Values</h2>
            <p>We believe in slow design, honest materials, and a fair price for things made properly. We're a small team, and we like it that way — it means we can stand behind everything we sell.</p>
            <div className="team-grid">
              {[
                { name:"Jorrit Berndsen", role:"Founder", img:"https://picsum.photos/seed/person1/400/400" },
                { name:"Anna de Vries", role:"Head of Sourcing", img:"https://picsum.photos/seed/person2/400/400" },
                { name:"Luca Martens", role:"Creative Director", img:"https://picsum.photos/seed/person3/400/400" },
              ].map(p => (
                <div key={p.name} className="team-card" itemScope itemType="https://schema.org/Person">
                  <img src={p.img} alt={p.name} className="team-img" loading="lazy" width="400" height="400" />
                  <div className="team-name" itemProp="name">{p.name}</div>
                  <div className="team-role" itemProp="jobTitle">{p.role}</div>
                </div>
              ))}
            </div>
          </article>
        )}

        {/* ARCHIVE LANDING */}
        {page === "archive" && (
          <section className="archive-pg" aria-labelledby="archive-heading">
            <div className="archive-pg-head">
              <p className="archive-pg-label">Archive</p>
              <h1 id="archive-heading" className="archive-pg-title">Guides, Materials<br />& Design History</h1>
              <p className="archive-pg-sub">A growing library of buying guides, material essays, designer profiles, and design histories for the curious collector.</p>
            </div>

            <nav className="archive-filter" aria-label="Filter archive by category">
              {ARCHIVE_CATEGORIES.map(c => (
                <button key={c} className={`cat ${archiveCategory === c ? 'active' : ''}`} onClick={() => setArchiveCategory(c)} aria-pressed={archiveCategory === c}>{c}</button>
              ))}
            </nav>

            {filteredArticles.length > 0 && (
              <>
                {/* Featured article — full-width horizontal card */}
                <div
                  className="arc-feat"
                  onClick={() => { setSelectedArticle(filteredArticles[0]); setPage('guide'); }}
                  role="article"
                  aria-label={`Featured: ${filteredArticles[0].title}`}
                >
                  <div className="arc-feat-img-wrap">
                    <img src={filteredArticles[0].heroImage} alt={filteredArticles[0].title} className="arc-feat-img" loading="lazy" />
                  </div>
                  <div className="arc-feat-body">
                    <span className="arc-feat-cat">{filteredArticles[0].category}</span>
                    <h2 className="arc-feat-title">{filteredArticles[0].title}</h2>
                    <p className="arc-feat-sub">{filteredArticles[0].subtitle}</p>
                    <span className="arc-feat-meta">{filteredArticles[0].readTime}</span>
                    <button
                      className="arc-feat-link"
                      onClick={e => { e.stopPropagation(); setSelectedArticle(filteredArticles[0]); setPage('guide'); }}
                    >
                      Read Article →
                    </button>
                  </div>
                </div>

                {/* Remaining articles — magazine grid */}
                {filteredArticles.length > 1 && (
                  <div className="archive-grid">
                    {filteredArticles.slice(1).map(article => (
                      <article
                        key={article.id}
                        className="arc-card"
                        onClick={() => { setSelectedArticle(article); setPage('guide'); }}
                        aria-label={article.title}
                      >
                        <div className="arc-card-img-wrap">
                          <img src={article.image} alt={article.title} className="arc-card-img" loading="lazy" />
                        </div>
                        <div className="arc-card-body">
                          <span className="arc-cat-tag">{article.category}</span>
                          <h2 className="arc-title">{article.title}</h2>
                          <p className="arc-excerpt">{article.subtitle}</p>
                          <span className="arc-meta">{article.readTime}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </>
            )}
          </section>
        )}

        {/* GUIDE / ARTICLE DETAIL */}
        {page === "guide" && selectedArticle && (() => {
          const a = selectedArticle;
          const relatedProducts = products.filter(p =>
            a.relatedProductTags.some(tag =>
              p.name.toLowerCase().includes(tag.toLowerCase()) ||
              p.description.toLowerCase().includes(tag.toLowerCase())
            )
          ).slice(0, 4);

          return (
            <article className="guide-pg" itemScope itemType="https://schema.org/Article">
              {/* Hero */}
              <div className="guide-hero">
                <img src={a.heroImage} alt={a.title} className="guide-hero-img" itemProp="image" />
                <div className="guide-hero-overlay" aria-hidden="true" />
                <div className="guide-hero-content">
                  <div className="guide-breadcrumb">
                    <button onClick={() => goTo('archive')} aria-label="Back to Archive">Archive</button>
                    <span aria-hidden="true">›</span>
                    <button onClick={() => { setArchiveCategory(a.category); goTo('archive'); }}>{a.category}</button>
                  </div>
                  <h1 className="guide-hero-title" itemProp="name">{a.title}</h1>
                  <p className="guide-hero-sub">{a.subtitle}</p>
                  <div className="guide-hero-meta">{a.readTime}</div>
                </div>
              </div>

              {/* Article body */}
              <div className="guide-body" itemProp="articleBody">
                {a.sections.map((section, i) => {
                  if (section.type === 'lead') return <p key={i} className="guide-lead">{section.text}</p>;
                  if (section.type === 'h2') return <h2 key={i} className="guide-h2">{section.text}</h2>;
                  if (section.type === 'p') return <p key={i} className="guide-p">{section.text}</p>;
                  if (section.type === 'pullquote') return (
                    <blockquote key={i} className="guide-pullquote">
                      <p>{section.text}</p>
                    </blockquote>
                  );
                  if (section.type === 'tip') return (
                    <div key={i} className="guide-tip" role="note">
                      <div className="guide-tip-title">{section.title}</div>
                      <p className="guide-tip-text">{section.text}</p>
                    </div>
                  );
                  if (section.type === 'list') return (
                    <ul key={i} className="guide-list">
                      {section.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  );
                  return null;
                })}

                {/* Tags */}
                {a.tags.length > 0 && (
                  <div className="guide-tags" aria-label="Article tags">
                    {a.tags.map(tag => (
                      <button
                        key={tag}
                        className="guide-tag"
                        onClick={() => { setSearchQuery(tag); setSearchOpen(true); }}
                        aria-label={`Search for ${tag}`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Related products */}
              {relatedProducts.length > 0 && (
                <div className="guide-related">
                  <h2 className="guide-related-head">From the Shop</h2>
                  <div className="guide-related-grid">
                    {relatedProducts.map(p => (
                      <article key={p.id} className="card" onClick={() => { setSelectedProduct(p); setQty(1); setPage('product'); }}>
                        <div className="card-img-wrap">
                          <img src={p.image} alt={p.name} className="card-img" loading="lazy" width="600" height="720" />
                          {p.originalPrice && <div className="badge" aria-label="On sale">Sale</div>}
                          {p.stock === 0 && <div className="sold-out-overlay" aria-label="Sold out">Sold Out</div>}
                          <div className="card-overlay">
                            <button className="quick-add" onClick={e => { e.stopPropagation(); if (p.stock > 0) addToCart(p); }} aria-label={p.stock > 0 ? `Quick add ${p.name}` : `${p.name} sold out`}>
                              {p.stock > 0 ? 'Quick Add' : 'Sold Out'}
                            </button>
                          </div>
                        </div>
                        <p className="card-cat">{p.category}</p>
                        <h3 className="card-name">{p.name}</h3>
                        <p className="card-price">${p.price}</p>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })()}

        {/* CONTACT */}
        {page === "contact" && (
          <section className="page-section">
            <h1>Get in Touch</h1>
            <p>Have a question about an order, a product, or just want to say hello? Fill in the form below and we'll get back to you within one business day.</p>
            <p style={{fontSize:14}}>You can also reach us directly at <a href="mailto:hello@foundry.com" style={{color:C.accent}}><strong>hello@foundry.com</strong></a></p>
            <form className="contact-form" onSubmit={e => { e.preventDefault(); notify("Message sent! We'll be in touch soon."); }}>
              <div className="frow">
                <div className="fg"><label className="fl" htmlFor="ct-fname">First Name</label><input id="ct-fname" className="fi" placeholder="Your first name" autoComplete="given-name" /></div>
                <div className="fg"><label className="fl" htmlFor="ct-lname">Last Name</label><input id="ct-lname" className="fi" placeholder="Your last name" autoComplete="family-name" /></div>
              </div>
              <div className="fg"><label className="fl" htmlFor="ct-email">Email</label><input id="ct-email" className="fi" type="email" placeholder="your@email.com" autoComplete="email" /></div>
              <div className="fg"><label className="fl" htmlFor="ct-subject">Subject</label>
                <select id="ct-subject" className="fi">
                  <option>Question about an order</option>
                  <option>Product question</option>
                  <option>Returns &amp; exchanges</option>
                  <option>Wholesale inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="fg"><label className="fl" htmlFor="ct-message">Message</label><textarea id="ct-message" className="fi" placeholder="How can we help?" /></div>
              <button type="submit" className="bprimary">Send Message</button>
            </form>
          </section>
        )}

      </main>

      {/* SITE FOOTER */}
      <footer className="site-footer" itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="Foundry" />
        <nav aria-label="Footer navigation">
          <div className="footer-nav">
            <button className="footer-link" onClick={() => setPage('shop')}>Shop</button>
            <button className="footer-link" onClick={() => { setArchiveCategory('All'); setPage('archive'); }}>Archive</button>
            <button className="footer-link" onClick={() => setPage('about')}>About</button>
            <button className="footer-link" onClick={() => setPage('mission')}>Mission</button>
            <button className="footer-link" onClick={() => setPage('contact')}>Contact</button>
            <button className="footer-link" onClick={() => setPage('admin')}>Admin</button>
          </div>
        </nav>
        <div className="footer-bottom">
          <span className="footer-copy">© 2025 Foundry. Objects made to last.</span>
          <address className="footer-contact" itemProp="email">
            <a href="mailto:hello@foundry.com">hello@foundry.com</a>
          </address>
        </div>
      </footer>

      {toast && <div role="status" aria-live="polite" className="toast">{toast}</div>}
    </div>
  );
}
