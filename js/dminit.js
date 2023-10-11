// Initialize
var dmfns = {
    fn: {
        retrieve: function () {
            dmfns.datasets.forEach(function (ds) {
                // Only once
                if (!dmfns.data[ds]) {
                    setTimeout(function (ds) {

                    }, 500, ds);
                }
            })}
    },
    datasets: ['events', 'food', 'hist', 'other', 'sports'],
    data: {}
};

// Get the data
dmfns.fn.retrieve();
