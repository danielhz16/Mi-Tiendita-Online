import { createCategory } from "./models/newCategoryModel.js";
import { editCategoryModel } from "./models/editCategoryModel.js";
import { deactivateCategoryModel } from "./models/deactivateCategoryModel.js";
import { activateCategoryModel } from "./models/activateCategoryModel.js";
import { getAllCategoriesModel } from "./models/getAllCategoriesModel.js";


//post
export const newCategory = async (req, res) => {
  const { name, status_category } = req.body;
  const user_id= req.user.id;
  try {
    const response = await createCategory({ name, status_category, user_id});
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//get
export const getAllCategories = async (req, res) => {
    try {
        const response = await getAllCategoriesModel();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//put
export const editCategory = async (req, res) => {
    const { category_id } = req.params;
    const { name } = req.body;
    console.log(category_id, name);
    try {
        const response = await editCategoryModel({ category_id, name })
        res.status(200).json('Categorí actualizada');
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error);
    }
};

//patch
export const deactivateCategory = async (req, res) => {
    const { category_id } = req.params;
    try {
        const response = await deactivateCategoryModel({ category_id });
        res.status(200).json('Categoría desactivada');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//patch
export const activateCategory = async (req, res) => {
    const { category_id } = req.params;
    try {
        const response = await activateCategoryModel({ category_id });
        res.status(200).json('Categoría activada');
    } catch (error) {
        res.status(500).json(error.message);
    }
};
