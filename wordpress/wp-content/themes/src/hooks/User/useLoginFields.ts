import { Ref, ref, watch } from 'vue';
import { Fields } from '@/types/User';
import Validator from '@/classes/Validator';
import RegisterRules from '@/Validation/RegisterRules';


export const useRegisterFields = () => {

    const isValidAll = ref(false);

    const DataFields: Ref<Fields> = ref({
        login: '',
        password: '',
    })

    const isntValidFields: Ref<Fields> = ref({
        login: null,
        password: null,
    })

    const ValidFields: Ref<Fields> = ref({
        login: null,
        password: null,
    })


    const validData = async () => {

        let validator = new Validator<Fields>({
            password: DataFields.value.password,
            login: DataFields.value.login,
            email: DataFields.value.email,
        });

        validator.setRules(RegisterRules);

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