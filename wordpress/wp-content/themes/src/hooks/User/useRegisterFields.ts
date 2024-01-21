import { Ref, ref, watch } from 'vue';
import { RegisterFields } from '@/types/User';
import Validator from '@/classes/Validator';
import RegisterRules from '@/Validation/RegisterRules';


export const useRegisterFields = () => {

    const isValidAll = ref(false);

    const DataFields: Ref<RegisterFields> = ref({
        login: '',
        password: '',
        email: ''
    })

    const isntValidFields: Ref<RegisterFields> = ref({
        login: null,
        password: null,
        email: null
    })

    const ValidFields: Ref<RegisterFields> = ref({
        login: null,
        password: null,
        email: null
    })


    const validData = async () => {

        let validator = new Validator<RegisterFields>({
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