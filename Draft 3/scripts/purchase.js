
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '9.99'
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                document.getElementById('paypalPaymentID').value = data.orderID;
                document.getElementById('paypalToken').value = data.paymentID;
                document.getElementById('paypalPayerID').value = data.payerID;
                document.getElementById('purchaseForm').submit();
            });
        }
    }).render('#paypal-button-container');
