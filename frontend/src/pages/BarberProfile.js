import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaCalendar } from 'react-icons/fa';
import toast from 'react-hot-toast';

const BarberProfile = () => {
  const { id } = useParams();
  const [barber, setBarber] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBarberProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/barbers/${id}`);
        setBarber(response.data);
      } catch (error) {
        console.error('Error fetching barber profile:', error);
        toast.error('Failed to load barber profile');
      } finally {
        setLoading(false);
      }
    };

    fetchBarberProfile();
  }, [id]);

  const formatTime = (time) => {
    return time || 'Not specified';
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center py-24">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary-900 border-t-transparent"></div>
        </div>
      </div>
    );
  }

  if (!barber) {
    return (
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center py-24">
          <h1 className="heading-lg mb-6">Barber Not Found</h1>
          <p className="font-display text-primary-600 mb-8">The barber profile you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <div className="border-b border-primary-200 py-12 mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="heading-xl mb-2">{barber.shopName}</h1>
            <p className="text-xl font-display text-primary-600 mb-6">{barber.userId?.name}</p>
            <div className="flex items-center space-x-8 text-primary-900">
              <div className="flex items-center">
                <FaStar className="text-primary-900 mr-2" />
                <span className="font-display">{barber.rating}</span>
                <span className="ml-1 text-primary-600">({barber.totalReviews} reviews)</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span className="font-display">{barber.location.city}, {barber.location.state}</span>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Link
              to={`/book/${barber.userId._id}`}
              className="btn-primary"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* About Section */}
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-secondary-800 mb-4">About</h2>
            {barber.description ? (
              <p className="text-secondary-600 leading-relaxed">{barber.description}</p>
            ) : (
              <p className="text-secondary-500 italic">No description available.</p>
            )}
          </div>

          {/* Services Section */}
          <div className="border-b border-primary-200 pb-12">
            <h2 className="heading-lg mb-8">Services & Pricing</h2>
            {barber.services.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {barber.services.map((service, index) => (
                  <div key={index} className="border-t border-primary-200 pt-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-display text-lg text-primary-900">{service.name}</h3>
                      <span className="font-display text-lg">₹{service.price}</span>
                    </div>
                    {service.description && (
                      <p className="text-primary-600 mb-3">{service.description}</p>
                    )}
                    <div className="flex items-center text-sm text-primary-500">
                      <FaClock className="mr-2" />
                      <span className="font-display">{service.duration} minutes</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-primary-500 font-display italic">No services available.</p>
            )}
          </div>

          {/* Working Hours */}
          <div className="border-b border-primary-200 pb-12">
            <h2 className="heading-lg mb-8">Working Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(barber.workingHours).map(([day, hours]) => (
                <div key={day} className="border-b border-primary-100 pb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-display text-lg text-primary-900 capitalize">{day}</span>
                    <span className="font-display text-primary-600">
                      {hours.isOpen ? `${formatTime(hours.open)} - ${formatTime(hours.close)}` : 'Closed'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="border-b border-primary-200 pb-8 mb-8">
            <h3 className="heading-md mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center text-primary-900">
                <FaEnvelope className="mr-4" />
                <span className="font-display">{barber.userId?.email}</span>
              </div>
              {barber.userId?.phone && (
                <div className="flex items-center text-primary-900">
                  <FaPhone className="mr-4" />
                  <span className="font-display">{barber.userId.phone}</span>
                </div>
              )}
              <div className="flex items-start text-primary-900">
                <FaMapMarkerAlt className="mr-4 mt-1" />
                <div className="font-display">
                  <p>{barber.location.address}</p>
                  <p className="text-primary-600">{barber.location.city}, {barber.location.state} {barber.location.zipCode}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="border-b border-primary-200 pb-8 mb-8">
            <h3 className="heading-md mb-6">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between font-display">
                <span className="text-primary-600">Experience</span>
                <span className="text-primary-900">{barber.experience} years</span>
              </div>
              <div className="flex justify-between font-display">
                <span className="text-primary-600">Services</span>
                <span className="text-primary-900">{barber.services.length}</span>
              </div>
              <div className="flex justify-between font-display">
                <span className="text-primary-600">Rating</span>
                <div className="flex items-center text-primary-900">
                  <FaStar className="mr-1" />
                  <span>{barber.rating}</span>
                </div>
              </div>
              <div className="flex justify-between font-display">
                <span className="text-primary-600">Reviews</span>
                <span className="text-primary-900">{barber.totalReviews}</span>
              </div>
            </div>
          </div>

          {/* Specialties */}
          {barber.specialties && barber.specialties.length > 0 && (
            <div className="border-b border-primary-200 pb-8 mb-8">
              <h3 className="heading-md mb-6">Specialties</h3>
              <div className="flex flex-wrap gap-3">
                {barber.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="border border-primary-900 text-primary-900 px-4 py-1 text-sm font-display uppercase tracking-wider"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Book Appointment CTA */}
          <div className="border border-primary-900 p-8">
            <h3 className="heading-md mb-4">Ready to Book?</h3>
            <p className="font-display text-primary-600 mb-6">
              Schedule your appointment with {barber.userId?.name} today!
            </p>
            <Link
              to={`/book/${barber.userId._id}`}
              className="btn-primary w-full text-center flex items-center justify-center"
            >
              <FaCalendar className="mr-2" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberProfile; 