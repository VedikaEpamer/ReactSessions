import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productGetApiProduct = createAsyncThunk(
  "product/getProducts",
  async () => {
    const response = await axios.get("http://localhost:3000/products");
    const data = response.data;
    return data;
  },
);

export const productAddApiProduct = createAsyncThunk(
  "product/addProduct",
  async (newProduct: { title: string; description: string; price: number }) => {
    const response = await axios.post(
      "http://localhost:3000/products",
      newProduct,
    );
    const data = response.data;
    return data;
  },
);

const initialState = {
  products: [] as {
    id: string;
    title: string;
    description: string;
    price: number;
  }[],
  isLoading: false,
  error: null as string | null,

  cartItems: [] as {
    id: string;
    title: string;
    price: number;
    quantity: number;
  }[],
};

const productApiSlice = createSlice({
  name: "productApi",
  initialState,
  reducers: {
    advanceAddToCart: (state, action) => {
      const productId = action.payload;

      if (state.cartItems.some((item) => item.id === productId)) {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        const product = state.products.find((p) => p.id === productId);

        state.cartItems.push({
          id: productId,
          title: product?.title || "",
          price: product?.price || 0,
          quantity: 1,
        });
      }
    },
    advanceRemoveFromCart: (state, action) => {
      const productId = action.payload;
      const product = state.cartItems.find((p) => p.id === productId);

      if (product) {
        if (product.quantity > 1) {
          state.cartItems = state.cartItems.map((p) => {
            if (p.id === productId) {
              return {
                ...p,
                quantity: p.quantity - 1,
              };
            }
            return p;
          });
        } else {
          state.cartItems = state.cartItems.filter((p) => p.id !== productId);
        }
      }
    },

    advanceClearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(productGetApiProduct.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(productGetApiProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(productGetApiProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Failed to fetch products";
    });

    builder.addCase(productAddApiProduct.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(productAddApiProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products.push(action.payload);
    });
    builder.addCase(productAddApiProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Failed to add product";
    });
  },
});

export const { advanceAddToCart, advanceRemoveFromCart, advanceClearCart } =
  productApiSlice.actions;
export default productApiSlice.reducer;
