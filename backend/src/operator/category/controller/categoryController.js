import { createCategory } from "../services/newCategoryService.js";
import { editCategoryService } from "../services/editCategoryService.js";
import { deactivateCategoryService } from "../services/deactivateCategoryService.js";
import { activateCategoryService } from "../services/activateCategoryService.js";
import { getAllCategoriesService } from "../services/getAllCategoriesService.js";
import { updateCategoryInfoService } from "../services/updateInfoCategoryService.js";

//post
export const newCategory = async (req, res) => {
  const { name, status_category } = req.body;
  const user_id= req.user.id;
  try {
    const response = await createCategory({ name, status_category, user_id});
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//get
export const getAllCategories = async (req, res) => {
    try {
        const response = await getAllCategoriesService();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//put
export const editCategory = async (req, res) => {
    const { category_id } = req.params;
    const { name } = req.body;
    try {
        const response = await editCategoryService({ category_id, name })
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
        const response = await deactivateCategoryService({ category_id });
        res.status(200).json('Categoría desactivada');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//patch
export const activateCategory = async (req, res) => {
    const { category_id } = req.params;
    try {
        const response = await activateCategoryService({ category_id });
        res.status(200).json('Categoría activada');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//get 
export const updateInfoCategory = async (req, res) => {
    const { category_id } = req.params;
    try {
        const response = await updateCategoryInfoService({ category_id });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
