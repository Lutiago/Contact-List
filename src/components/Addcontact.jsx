import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function AddContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="mb-3">
          <label htmlFor="full_name" className="form-label">
            Full Name
          </label>
          <input
            {...register("full_name", { required: true })}
            type="text"
            className="form-control"
            id="full_name"
          />
          {errors.full_name && <div className="error">Required</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            type="email"
            className="form-control"
            id="email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            {...register("phone")}
            type="phone"
            className="form-control"
            id="phone"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Mail Address
          </label>
          <input
            {...register("address")}
            type="text"
            className="form-control"
            id="address"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Contact
        </button>
      </form>
    </div>
  );
}