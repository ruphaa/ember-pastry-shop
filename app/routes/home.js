import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            title: "Hello & Welcome to Candy's Cupcakes",
            content: [
                {
                    subheading: "National Cupcake Delivery",
                    passage: `Candy's Cupcakes now have a brand new online shop specialising in cupcake delivery.

                    Using our cupcake delivery service your order will arrive beautifully packaged, ready to eat and will last up to 5 days. We also include a free gift tag for a personal message.
                    
                    Simply place your order online before 1pm and have your cupcakes delivered the next day for free by our specialist fragile courier. (Nationwide cupcake delivery available).`
                },
                {
                    subheading: "Local Cupcakes & Cakes",
                    passage: `Candy's Cupcakes creates amazing cupcakes and wedding cakes, delivering throughout Greater Manchester and Cheshire. Our cupcakes and cakes are made to order and can cater for your imagination.
                    
                    Whether you want a five tier wedding cake for your special day, branded cupcakes for a corporate event, a unique birthday cake for a one to one hundred year old, or you just fancy some cupcakes for the weekend. Candy's Cupcakes can create something special and memorable just for you.`
                }
            ]
        };
    }
});
