import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import  setHeaderFooter from "./setHeaderFooter.mjs";

function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);
}

async function init() {
    const parkData = await getParkData();
    const id = getParam("id");
    const centerDetails = getParkVisitorCenterDetails(id);
    setHeaderFooter(parkData);
}

init();