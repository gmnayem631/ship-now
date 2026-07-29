"use client";

import { useState } from "react";
import FormInput from "../ui/FormInput";
import FormSelect from "../ui/FormSelect";

const CreateShipmentForm = () => {
  const [form, setForm] = useState({
    senderCompany: "GreenHaven",
    senderEmail: "logistics@greenhaven.com",
    senderPhone: "408-555-7210",
    pickupAddress: "1120 Birch Street, Portland, OR 97205, USA",
    recipientCompany: "FreshNest",
    recipientEmail: "warehouse@freshnest.com",
    recipientPhone: "786-555-4432",
    deliveryAddress: "",
    itemDescription: "Premium Garden Tool Set",
    quantity: "40",
    value: "3200",
    weight: "125",
    carrier: "",
    shippingMethod: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!form.deliveryAddress.trim()) {
      newErrors.deliveryAddress = "Address is required";
    }
    if (!form.shippingMethod) {
      newErrors.shippingMethod = "Shipping method is required";
    }
    if (!form.carrier) {
      newErrors.carrier = "Carrier is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Sender + Recipient */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Sender */}
        <div className="rounded-xl border border-gray-100 bg-white p-5 sm:p-6">
          <h2 className="mb-5 text-lg font-semibold text-[#333]">
            Sender Info
          </h2>
          <div className="space-y-4">
            <FormInput
              label="Company"
              name="senderCompany"
              value={form.senderCompany}
              onChange={handleChange}
            />
            <FormInput
              label="Email"
              name="senderEmail"
              type="email"
              value={form.senderEmail}
              onChange={handleChange}
            />
            <FormInput
              label="Phone Number"
              name="senderPhone"
              value={form.senderPhone}
              onChange={handleChange}
            />
            <FormInput
              label="Pickup Address"
              name="pickupAddress"
              value={form.pickupAddress}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Recipient */}
        <div className="rounded-xl border border-gray-100 bg-white p-5 sm:p-6">
          <h2 className="mb-5 text-lg font-semibold text-[#333]">
            Recipient Info
          </h2>
          <div className="space-y-4">
            <FormInput
              label="Company"
              name="recipientCompany"
              value={form.recipientCompany}
              onChange={handleChange}
            />
            <FormInput
              label="Email"
              name="recipientEmail"
              type="email"
              value={form.recipientEmail}
              onChange={handleChange}
            />
            <FormInput
              label="Phone Number"
              name="recipientPhone"
              value={form.recipientPhone}
              onChange={handleChange}
            />
            <FormInput
              label="Delivery Address"
              name="deliveryAddress"
              placeholder="Street address, city, state/province, ZIP code"
              value={form.deliveryAddress}
              onChange={handleChange}
              error={errors.deliveryAddress}
            />
          </div>
        </div>
      </div>

      {/* Package Details */}
      <div className="rounded-xl border border-gray-100 bg-white p-5 sm:p-6">
        <h2 className="mb-5 text-lg font-semibold text-[#333]">
          Package Details
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FormInput
            label="Item Description"
            name="itemDescription"
            value={form.itemDescription}
            onChange={handleChange}
          />
          <FormInput
            label="Quantity"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
          />
          <FormInput
            label="Value"
            name="value"
            value={form.value}
            onChange={handleChange}
          />
          <FormInput
            label="Weight"
            name="weight"
            value={form.weight}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Shipping Details */}
      <div className="rounded-xl border border-gray-100 bg-white p-5 sm:p-6">
        <h2 className="mb-5 text-lg font-semibold text-[#333]">
          Shipping Details
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormSelect
            label="Carrier"
            name="carrier"
            value={form.carrier}
            onChange={handleChange}
            error={errors.carrier}
          >
            <option value="">Select Carrier</option>
            <option value="FedEx">FedEx</option>
            <option value="DHL">DHL</option>
            <option value="UPS">UPS</option>
            <option value="USPS">USPS</option>
          </FormSelect>

          <FormSelect
            label="Shipping Method"
            name="shippingMethod"
            value={form.shippingMethod}
            onChange={handleChange}
            error={errors.shippingMethod}
          >
            <option value="">Select Method</option>
            <option value="Road Freight">Road Freight</option>
            <option value="Rail Freight">Rail Freight</option>
            <option value="Ocean Freight">Ocean Freight</option>
            <option value="Air Freight">Air Freight</option>
          </FormSelect>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          className="h-11 rounded-lg border border-gray-200 px-6 text-sm font-medium text-[#333] hover:bg-gray-50"
        >
          Delete Form
        </button>
        <button
          type="submit"
          className="h-11 rounded-lg bg-[#333] px-6 text-sm font-medium text-white hover:bg-[#222]"
        >
          Submit Shipment
        </button>
      </div>
    </form>
  );
};

export default CreateShipmentForm;
