export const ACTIONS = {
    UPDATE_CURRENCY: 'slot_machine/update_currency',
};

export const updateCurrency = coins => ({ type: ACTIONS.UPDATE_CURRENCY, payload: coins });