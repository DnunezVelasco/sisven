<template>
    <div class="container">
      <h1 class="text-start">Categories List |</h1>
      <button @click="createNewCategory" class="btn btn-success mx-2">
        <font-awesome-icon icon="plus" />
      </button>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Namec</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(category, index) in categories" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ category.id }}</td>
            <td>{{ category.namec }}</td>
            <td>{{ category.description }}</td>
            <td>
              <button @click="deleteCategory(category.id)" class="btn btn-danger mx-2">
                <font-awesome-icon icon="trash" />
              </button>
              <button @click="editCategory(category.id)" class="btn btn-warning mx-2">
                <font-awesome-icon icon="pencil" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';

  export default {
    name: 'Category',
    data() {
      return {
        categories: [],
      };
    },
    methods: {
      async deleteCategory(id) {
        const confirmResult = await Swal.fire({
          title: `Do you want to delete the Category with id ${id}?`,
          showCancelButton: true,
          confirmButtonText: 'Delete',
        });

        if (confirmResult.isConfirmed) {
          try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`);
            if (response.data.success) {
              this.categories = response.data.categories;
              Swal.fire('Deleted!! ', '', 'success');
            }
          } catch (error) {
            console.error('Error deleting category:', error);
          }
        }
      },
      editCategory(id) {
        this.$router.push({ name: 'EditarCategory', params: { id: `${id}` } });
      },
      createNewCategory() {
        this.$router.push({ name: 'NewCategory' });
      },
    },
    async mounted() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/categories');
        this.categories = response.data.categories.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
  };
  </script>
