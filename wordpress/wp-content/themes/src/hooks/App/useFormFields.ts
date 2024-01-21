import { Ref, ref, watch } from 'vue';
import { LoginFields } from '@/types/User';
import Validator from '@/classes/Validator';
import LoginRules from '@/Validation/LoginRules';
import { IFormForUnregisteredUsers } from '@/types/App';


export const useFormFields = () => {

    const isValidAll = ref(false);

    const DataFields: Ref<IFormForUnregisteredUsers> = ref({
        name: '',
        tel: '',
    })

    const isntValidFields: Ref<IFormForUnregisteredUsers> = ref({
        name: null,
        tel: null,
    })

    const ValidFields: Ref<IFormForUnregisteredUsers> = ref({
        name: null,
        tel: null,
    })


    const validData = async () => {

        let validator = new Validator<IFormForUnregisteredUsers>({
            name: DataFields.value.name,
            tel: DataFields.value.tel
        });

        validator.setRules(LoginRules);

        let validFields = await validator.run();

        ValidFields.value = validFields;

        isntValidFields.value = validator.getIsntValidFields();

        if (validator.isAllFieldsValid()) {
            isValidAll.value = true
        } else {
            isValidAll.value = false
        }
    }

    watch(DataFields, () => {
        validData()
    }, { deep: true })

    return {
        DataFields,
        isntValidFields,
        ValidFields,
        validData,
        isValidAll
    }
}