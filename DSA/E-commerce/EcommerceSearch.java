import java.util.Arrays;
import java.util.Comparator;

// Product Class
class Product {
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return "ID: " + productId +
               ", Name: " + productName +
               ", Category: " + category;
    }
}

// Main Class
public class EcommerceSearch {

    // Linear Search Method
    public static Product linearSearch(Product[] products, int targetId) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productId == targetId) {
                return products[i];
            }
        }
        return null;
    }

    // Binary Search Method
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        // Product Array
        Product[] products = {
            new Product(105, "Laptop", "Electronics"),
            new Product(101, "Mobile", "Electronics"),
            new Product(104, "Shoes", "Fashion"),
            new Product(102, "Watch", "Accessories"),
            new Product(103, "Book", "Education")
        };

        int searchId = 103;

        // Linear Search
        Product result1 = linearSearch(products, searchId);

        System.out.println("=== Linear Search Result ===");
        if (result1 != null) {
            System.out.println(result1);
        } else {
            System.out.println("Product not found");
        }

        // Sort Products for Binary Search
        Arrays.sort(products, new Comparator<Product>() {
            @Override
            public int compare(Product p1, Product p2) {
                return p1.productId - p2.productId;
            }
        });

        // Binary Search
        Product result2 = binarySearch(products, searchId);

        System.out.println("\n=== Binary Search Result ===");
        if (result2 != null) {
            System.out.println(result2);
        } else {
            System.out.println("Product not found");
        }

        // Analysis
        System.out.println("\n=== Time Complexity Analysis ===");
        System.out.println("Linear Search:");
        System.out.println("Best Case    : O(1)");
        System.out.println("Average Case : O(n)");
        System.out.println("Worst Case   : O(n)");

        System.out.println("\nBinary Search:");
        System.out.println("Best Case    : O(1)");
        System.out.println("Average Case : O(log n)");
        System.out.println("Worst Case   : O(log n)");

        System.out.println("\n=== Conclusion ===");
        System.out.println("Binary Search is more suitable for an e-commerce platform");
        System.out.println("because it is much faster for large sorted datasets.");
    }
}