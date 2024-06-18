const queryCustomer = async() => {
    const data = await queryHome();
    console.log(data);
    const dataAfcLayoutFilter = data.filter(item => {
        return item.acf_fc_layout === "customer_drg_1_0_0";
    });
};

queryCustomer();