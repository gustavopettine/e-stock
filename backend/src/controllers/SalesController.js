class SalesController {
  index(request, response) {
    return response.json(["Sale 1", "Sale 2", "Sale 3"]);
  }
}

module.exports = SalesController;