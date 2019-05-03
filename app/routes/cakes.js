import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            title: "Birthday Cakes, Anniversary Cakes, or Just for Fun",
            passage: `If you can imagine it, then Candy's Cupcakes can create it. I can create bespoke birthday cakes and cupcakes to your specification to add a 'wow factor' to your party. I love working with new ideas, vintage themes, especially children's birthday cakes as they keep me up-to-date with the latest toys, computer games and animated films.

            I love to hand paint designs and create 3D models, or I can use real toys and dolls to place on your birthday cake so your child has a present to take away.
            
            Once you know the design you would like then all you have to do is to choose the flavour of the sponge and buttercream. You can find a full list of flavours on my prices and portions page.`,
            imageList: [
                "https://www.candyscupcakes.co.uk/img/celebrations/birthday-cake-10t.jpg",
                "https://www.candyscupcakes.co.uk/img/celebrations/birthday-cake-11t.jpg",
                "https://www.candyscupcakes.co.uk/img/celebrations/birthday-cake-12t.jpg",
                "https://www.candyscupcakes.co.uk/img/celebrations/birthday-cake-13t.jpg",
                "https://www.candyscupcakes.co.uk/img/celebrations/birthday-cake-14t.jpg",
                "https://www.candyscupcakes.co.uk/img/celebrations/birthday-cake-15t.jpg",
                "https://www.candyscupcakes.co.uk/img/celebrations/birthday-cake-18t.jpg",
                "https://www.candyscupcakes.co.uk/img/celebrations/birthday-cake-1t.jpg",
                "https://www.candyscupcakes.co.uk/img/celebrations/birthday-cake-21t.jpg"
            ]
        };
    }
});
