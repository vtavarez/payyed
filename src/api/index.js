import axios from "axios";
import { openExchangeId } from "data/keys";

export const getExchangeRates = async ({ queryKey }) => {
    return await axios.get(`https://openexchangerates.org/api/latest.json`, {
        app_id: openExchangeId,
        base: queryKey[1],
        symbols: queryKey[2],
        prettyprint: true,
        show_alternative: false,
    });
};
