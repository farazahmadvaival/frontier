(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{390:function(e,t,s){"use strict";s.r(t);var n=s(42),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Frontier provides two different strategies for handling "),s("code",[e._v("H160")]),e._v(" addresses.")]),e._v(" "),s("h1",{attrs:{id:"h256-h160-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#h256-h160-mapping"}},[e._v("#")]),e._v(" H256 -> H160 mapping")]),e._v(" "),s("p",[e._v("The first strategy consists of of a truncated hash scheme, where the first 160 LE bytes of a "),s("code",[e._v("H256")]),e._v(" address are used to form the "),s("code",[e._v("H160")]),e._v(" address.")]),e._v(" "),s("p",[s("code",[e._v("AccountId32")]),e._v(" is the Account type used for "),s("code",[e._v("frame_system::pallet::Config::AccountId")]),e._v(".")]),e._v(" "),s("p",[e._v("The Runtime's "),s("code",[e._v("Signature")]),e._v(" type is configured as "),s("a",{attrs:{href:"https://docs.rs/sp-runtime/2.0.1/sp_runtime/enum.MultiSignature.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("sp_runtime::MultiSignature")]),s("OutboundLink")],1),e._v(", which means signatures can be:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Sr25519")])]),e._v(" "),s("li",[s("code",[e._v("Ed25519")])]),e._v(" "),s("li",[s("code",[e._v("ECDSA")])])]),e._v(" "),s("h1",{attrs:{id:"native-h160-via-accountid20"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#native-h160-via-accountid20"}},[e._v("#")]),e._v(" Native H160 via AccountId20")]),e._v(" "),s("p",[e._v("The second strategy consists of using "),s("code",[e._v("fp-account")]),e._v(" so that "),s("code",[e._v("AccountId20")]),e._v(" is the Account type used for "),s("code",[e._v("frame_system::pallet::Config::AccountId")]),e._v(".")]),e._v(" "),s("p",[e._v("The Runtime's "),s("code",[e._v("Signature")]),e._v(" type is configured as "),s("code",[e._v("EthereumSigner")]),e._v(", which means only "),s("code",[e._v("ECDSA")]),e._v(" signatures are supported.")])])}),[],!1,null,null,null);t.default=r.exports}}]);