class ProductsController {
    index(request, response) {
      return response.json(["Product 1", "Product 2", "Product 3"]);
    }

    create(request, response) {
        const { name, price } = request.body;
        return response.status(201).json({ name, price });
      }
  }
  
  module.exports = ProductsController;