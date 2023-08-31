import React, { useEffect, useState } from "react";
import { useUserForm } from "../../hooks/Custom.hooks";


const UserForm = () => {
  const { form, setForm, handleChanges } = useUserForm();

  const [areEquals, setAreEquals] = useState(true);

  const [passOk, setPassOk] = useState();

  const handlePassOk = (e) => {
    setPassOk(e.target.value);
  };

  useEffect(() => {
    const { pass } = form;
    setAreEquals(pass === passOk);
  }, [passOk]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };



  return (
    <div className="container-backGroundImg">
    <div className="w-25 mx-auto mt-5" >
      <h4 className="mb-3"><strong>Register now!</strong></h4>

      <form class="needs-validation" novalidate>
        <div class="row g-3">
          <div class="col-12">
            <label for="email" class="form-label">
            <strong>Email</strong><span class="text-muted"><strong>(Opcional)</strong></span>
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              onChange={handleChanges}
              placeholder="tu@example.com"
            />
            <div class="invalid-feedback">
              Ingresa una dirección de correo electrónico válida para
              actualizaciones de envío.
            </div>
          </div>

          <div class="col-12">
            <label for="username" class="form-label">
            <strong>Password</strong>
            </label>
            <div class="input-group has-validation">
              
              <input
                type="password"
                class="form-control"
                name="pass"
                id="password"
                placeholder="Password"
                onChange={handleChanges}
                required
              />
              <div class="invalid-feedback"></div>
            </div>
          </div>

          <div class="col-12">
            <label for="username" class="form-label">
            <strong>Repeat Password</strong>
            </label>
            <div class="input-group has-validation">
             
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Repeat Password"
                onChange={handlePassOk}
                required
              />
              {!areEquals && (
                <div class="form-text list-group-item-danger">
                  Las contraceñas no coinciden.
                </div>
              )}
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <button
          disabled={!areEquals}
          class="w-100 btn btn-primary btn-lg"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  
  );
};

export default UserForm;
