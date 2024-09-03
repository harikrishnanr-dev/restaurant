import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchRestaurant } from "../redux/restaurantSlice";

function Header() {
  const dispatch = useDispatch();
    return <>
    <Navbar variant="dark">
            <Container>
                <Link to='/' style={{textDecoration:'none'}}>
          <Navbar.Brand className="d-flex justify-content-between align-items-center">
            <img
                        alt=""
                        src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%2068%2068%22%20viewBox%3D%220%200%2068%2068%22%3E%3Cpath%20fill%3D%22%23FF7E7E%22%20d%3D%22M53.7958%2C6.9876v9.4578H14.2045V6.9876c0-1.1403%2C0.9244-2.0647%2C2.0647-2.0647h9.2082%0D%0A%09%09c0.4314%2C0%2C0.8639-0.2188%2C1.034-0.6153c1.32-3.0766%2C12.5408-3.0766%2C13.8609%2C0c0.1701%2C0.3965%2C0.6026%2C0.6153%2C1.034%2C0.6153h10.3248%0D%0A%09%09C52.8714%2C4.9229%2C53.7958%2C5.8473%2C53.7958%2C6.9876z%22%2F%3E%3Cpath%20d%3D%22M22.6154%208.7199v1.6323h2.6356v.9268h-2.6356v2.4488h-1.0033V7.7844h3.962l-.0083.9355H22.6154zM29.4939%2013.7873c-1.7587%200-3.1289-1.2944-3.1289-3.0736%200-1.7843%201.3741-3.0736%203.1289-3.0736%201.7565%200%203.1289%201.2909%203.1289%203.0736C32.6228%2012.4935%2031.2521%2013.7873%2029.4939%2013.7873zM29.4939%208.5583c-1.2074%200-2.1.9732-2.1%202.1554%200%201.1854.8965%202.1554%202.1%202.1554%201.2045%200%202.1-.9709%202.1-2.1554C31.5939%209.5301%2030.6998%208.5583%2029.4939%208.5583zM36.6361%2013.7873c-1.7587%200-3.1289-1.2944-3.1289-3.0736%200-1.7843%201.3741-3.0736%203.1289-3.0736%201.7565%200%203.1289%201.2909%203.1289%203.0736C39.765%2012.4935%2038.3942%2013.7873%2036.6361%2013.7873zM36.6361%208.5583c-1.2074%200-2.1.9732-2.1%202.1554%200%201.1854.8965%202.1554%202.1%202.1554%201.2045%200%202.1-.9709%202.1-2.1554C38.7361%209.5301%2037.842%208.5583%2036.6361%208.5583zM46.3882%2010.7265c0%201.8433-1.0892%203.0013-3.3836%203.0013h-1.9727V7.7844h2.0405C45.0997%207.7844%2046.3882%208.7866%2046.3882%2010.7265zM45.3766%2010.7518c0-1.3603-.7791-2.0405-2.3381-2.0405h-1.0033v4.0727h1.114C44.5395%2012.784%2045.3766%2012.1363%2045.3766%2010.7518z%22%2F%3E%3Crect%20width%3D%2255.074%22%20height%3D%2237.361%22%20x%3D%226.463%22%20y%3D%2223.142%22%20fill%3D%22%23FBC41A%22%2F%3E%3Cpath%20fill%3D%22%23F59F02%22%20d%3D%22M61.5408%2C23.1456v37.3603H6.4656v-4.532c44.4732-5.874%2C47.9935-25.4678%2C47.694-32.8283H61.5408z%22%2F%3E%3Crect%20width%3D%2261.415%22%20height%3D%226.7%22%20x%3D%223.293%22%20y%3D%2216.442%22%20fill%3D%22%23DEE1E6%22%2F%3E%3Cpath%20fill%3D%22%23C7CBD1%22%20d%3D%22M64.7101%2C16.4457v6.6999H54.4693c0.413-2.1059%2C0.2994-4.9346%2C0.1652-6.6999H64.7101z%22%2F%3E%3Crect%20width%3D%2261.414%22%20height%3D%225.583%22%20x%3D%223.293%22%20y%3D%2260.417%22%20fill%3D%22%23DEE1E6%22%2F%3E%3Crect%20width%3D%2213.42%22%20height%3D%2220.682%22%20x%3D%2212.657%22%20y%3D%2239.731%22%20fill%3D%22%23FFF%22%2F%3E%3Cpath%20fill%3D%22%23DEE1E6%22%20d%3D%22M26.08%2C39.7353V60.413H12.6596v-1.9717c9.5389-2.1886%2C9.8692-13.3172%2C9.4356-18.706H26.08z%22%2F%3E%3Crect%20width%3D%2224.776%22%20height%3D%2217.166%22%20x%3D%2231.419%22%20y%3D%2228.799%22%20fill%3D%22%234DABF4%22%2F%3E%3Cpath%20fill%3D%22%231D7BD5%22%20d%3D%22M56.1933%2C28.8028v17.1575H31.4172v-3.9951c20.2648%2C1.5795%2C21.2971-9.0949%2C20.9668-13.1623H56.1933z%22%2F%3E%3Cline%20x1%3D%2243.807%22%20x2%3D%2243.807%22%20y1%3D%2228.799%22%20y2%3D%2245.965%22%20fill%3D%22%234DABF4%22%2F%3E%3Cpath%20d%3D%22M64.707%2C24.1421c0.5527%2C0%2C1-0.4478%2C1-1v-6.6997c0-0.5522-0.4473-1-1-1h-9.9112V6.9878%0D%0A%09%09%09%09c0-1.6899-1.375-3.0649-3.0644-3.0649H41.4063c-0.0635%2C0-0.1211-0.0288-0.1152-0.0093C40.3701%2C1.7656%2C36.6328%2C1%2C33.4414%2C1%0D%0A%09%09%09%09c-3.1904%2C0-6.9277%2C0.7656-7.832%2C2.8872c-0.0107%2C0.0098-0.0615%2C0.0356-0.1318%2C0.0356h-9.208c-1.6904%2C0-3.0654%2C1.375-3.0654%2C3.0649%0D%0A%09%09%09%09v8.4546H3.293c-0.5527%2C0-1%2C0.4478-1%2C1v6.6997c0%2C0.5522%2C0.4473%2C1%2C1%2C1h2.1699V59.417H3.293c-0.5527%2C0-1%2C0.4478-1%2C1V66%0D%0A%09%09%09%09c0%2C0.5522%2C0.4473%2C1%2C1%2C1H64.707c0.5527%2C0%2C1-0.4478%2C1-1v-5.583c0-0.5522-0.4473-1-1-1h-2.1699V24.1421H64.707z%20M15.2041%2C6.9878%0D%0A%09%09%09%09c0-0.5874%2C0.4775-1.0649%2C1.0654-1.0649h9.208c0.8672%2C0%2C1.6328-0.4785%2C1.9531-1.2212C27.7891%2C3.8652%2C30.1357%2C3%2C33.4414%2C3%0D%0A%09%09%09%09c3.3066%2C0%2C5.6533%2C0.8652%2C6.0117%2C1.7017c0.3174%2C0.7417%2C1.085%2C1.2212%2C1.9531%2C1.2212h10.3252c0.5869%2C0%2C1.0644%2C0.4775%2C1.0644%2C1.0649%0D%0A%09%09%09%09v8.4546H15.2041V6.9878z%20M4.293%2C17.4424c57.6078%2C0.0014-2.757%2C0.0037%2C59.4141%2C0v4.6997c-12.2994%2C0-47.1474%2C0-59.4141%2C0V17.4424z%0D%0A%09%09%09%09%20M63.707%2C65H4.293v-3.583c6.6422%2C0.01%2C62.9609%2C0.0213%2C59.4141%2C0V65z%20M60.5371%2C59.417h-33.46V40.7632%0D%0A%09%09%09%09c0-1.1206-0.9121-2.0322-2.0322-2.0322H13.6895c-1.1201%2C0-2.0322%2C0.9116-2.0322%2C2.0322V59.417H7.4629V24.1421h53.0742V59.417z%0D%0A%09%09%09%09%20M13.6592%2C59.4131l0.0303-18.6821l11.3877%2C0.0322v18.6499H13.6592z%22%2F%3E%3Cpath%20d%3D%22M31.4189%2C46.9644h24.7764c0.5527%2C0%2C1-0.4478%2C1-1v-17.166c0-0.5522-0.4473-1-1-1H31.4189c-0.5527%2C0-1%2C0.4478-1%2C1v17.166%0D%0A%09%09%09%09C30.4189%2C46.5166%2C30.8662%2C46.9644%2C31.4189%2C46.9644z%20M55.1953%2C44.9644H44.8076v-15.166h10.3877V44.9644z%20M32.4189%2C29.7983h10.3887%0D%0A%09%09%09%09v15.166H32.4189V29.7983z%22%2F%3E%3C%2Fsvg%3E"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-3"
                        />{' '}
              Food <span className="text-warning">Circle</span>
              <input onChange={(e)=>dispatch(searchRestaurant(e.target.value))} type ="text" className="form-control ms-5 w-100" placeholder="search by"/>
          </Navbar.Brand>
                        </Link>
        </Container>
      </Navbar>
     
    
    </>;
}

export default Header;
